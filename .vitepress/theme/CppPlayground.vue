<template>
  <div class="cpp-playground">
    <div class="cpp-toolbar">
      <button class="cpp-run-btn" @click="runCode" :disabled="running">
        {{ running ? 'Đang chạy...' : '▶ Chạy code' }}
      </button>
      <button class="cpp-reset-btn" @click="resetCode" :disabled="running">
        ↺ Reset
      </button>
    </div>

    <div ref="editorContainer" class="cpp-editor"></div>

    <div class="cpp-output">
      <div class="cpp-output-label">Kết quả</div>
      <pre class="cpp-output-content">{{ output || 'Nhấn "Chạy code" để xem kết quả ở đây.' }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { EditorView, basicSetup } from 'codemirror'
import { cpp } from '@codemirror/lang-cpp'
import { oneDark } from '@codemirror/theme-one-dark'
// Served as a static file from /public/vendor/ (see integration guide) —
// no npm package needed for JSCPP itself.
const jscppWorkerUrl = '/vendor/JSCPP.es5.min.js'

function loadScriptOnce(src) {
  return new Promise((resolve, reject) => {
    if (window.JSCPP) return resolve()
    const existing = document.querySelector(`script[src="${src}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve())
      return
    }
    const s = document.createElement('script')
    s.src = src
    s.onload = () => resolve()
    s.onerror = () => reject(new Error(`Không tải được ${src}`))
    document.head.appendChild(s)
  })
}

const props = defineProps({
  initialCode: {
    type: String,
    default:
`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++!" << endl;
    return 0;
}`
  },
  stdin: { type: String, default: '' }
})

const editorContainer = ref(null)
const output = ref('')
const running = ref(false)

let editorView = null
let helper = null

onMounted(async () => {
  editorView = new EditorView({
    doc: props.initialCode,
    extensions: [basicSetup, cpp(), oneDark],
    parent: editorContainer.value
  })

  try {
    await loadScriptOnce(jscppWorkerUrl)
    helper = new window.JSCPP.AsyncWebWorkerHelper(jscppWorkerUrl)
  } catch (e) {
    output.value = `Không tải được JSCPP: ${e.message}\nKiểm tra lại file public/vendor/JSCPP.es5.min.js đã có chưa.`
  }
})

function resetCode() {
  if (!editorView) return
  editorView.dispatch({
    changes: { from: 0, to: editorView.state.doc.length, insert: props.initialCode }
  })
  output.value = ''
}

async function runCode() {
  if (!editorView || !helper) return
  running.value = true
  output.value = ''
  const code = editorView.state.doc.toString()

  try {
    const exitCode = await helper.run(code, props.stdin, {
      stdio: {
        write: (s) => { output.value += s }
      },
      unsigned_overflow: 'warn'
    })
    output.value += `\n\n[Chương trình kết thúc, mã thoát: ${exitCode}]`
  } catch (err) {
    output.value += `\n\nLỗi: ${err && err.message ? err.message : err}`
  } finally {
    running.value = false
  }
}

onBeforeUnmount(() => {
  editorView && editorView.destroy()
  helper && helper.terminate && helper.terminate()
})
</script>

<style scoped>
.cpp-playground {
  border: 1px solid var(--vp-c-divider, #333);
  border-radius: 8px;
  overflow: hidden;
  margin: 24px 0;
}
.cpp-toolbar {
  display: flex;
  gap: 8px;
  padding: 8px 12px;
  background: var(--vp-c-bg-soft, #1a1a1a);
  border-bottom: 1px solid var(--vp-c-divider, #333);
}
.cpp-run-btn {
  background: #1a52f9;
  color: #fff;
  border: none;
  padding: 6px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
}
.cpp-run-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.cpp-reset-btn {
  background: transparent;
  color: inherit;
  border: 1px solid var(--vp-c-divider, #444);
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
}
.cpp-editor {
  font-size: 14px;
}
.cpp-editor :deep(.cm-editor) {
  max-height: 400px;
}
.cpp-output {
  border-top: 1px solid var(--vp-c-divider, #333);
  background: #0d0d0d;
}
.cpp-output-label {
  font-size: 12px;
  color: #888;
  padding: 6px 12px 0;
}
.cpp-output-content {
  margin: 0;
  padding: 12px;
  color: #d4d4d4;
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 13px;
  white-space: pre-wrap;
  word-break: break-word;
  min-height: 60px;
  max-height: 300px;
  overflow-y: auto;
}
</style>
