<script setup>
import { ref, computed } from 'vue'

const code = [
  'int sum = 0;',
  'for (int i = 1; i <= 5; i++) {',
  '    sum += i;',
  '}',
  'cout << sum;'
]

const steps = [
  { line: 0, i: null, sum: 0, note: 'Khởi tạo sum = 0' },
  { line: 1, i: 1, sum: 0, note: 'i = 1, kiểm tra i <= 5 → đúng' },
  { line: 2, i: 1, sum: 1, note: 'sum += i → sum = 0 + 1 = 1' },
  { line: 1, i: 2, sum: 1, note: 'i tăng lên 2, kiểm tra i <= 5 → đúng' },
  { line: 2, i: 2, sum: 3, note: 'sum += i → sum = 1 + 2 = 3' },
  { line: 1, i: 3, sum: 3, note: 'i tăng lên 3, kiểm tra i <= 5 → đúng' },
  { line: 2, i: 3, sum: 6, note: 'sum += i → sum = 3 + 3 = 6' },
  { line: 1, i: 4, sum: 6, note: 'i tăng lên 4, kiểm tra i <= 5 → đúng' },
  { line: 2, i: 4, sum: 10, note: 'sum += i → sum = 6 + 4 = 10' },
  { line: 1, i: 5, sum: 10, note: 'i tăng lên 5, kiểm tra i <= 5 → đúng' },
  { line: 2, i: 5, sum: 15, note: 'sum += i → sum = 10 + 5 = 15' },
  { line: 1, i: 6, sum: 15, note: 'i tăng lên 6, kiểm tra i <= 5 → sai, thoát vòng lặp' },
  { line: 4, i: 6, sum: 15, note: 'In ra kết quả: sum = 15' }
]

const stepIndex = ref(0)
const current = computed(() => steps[stepIndex.value])

function next() {
  if (stepIndex.value < steps.length - 1) stepIndex.value++
}
function prev() {
  if (stepIndex.value > 0) stepIndex.value--
}
function reset() {
  stepIndex.value = 0
}
</script>

<template>
  <div class="demo-loop">
    <p class="demo-title">Thử ngay: vòng lặp for tính tổng 1 đến 5</p>

    <div class="demo-body">
      <pre class="demo-code"><code
        v-for="(line, idx) in code"
        :key="idx"
        :class="{ active: idx === current.line }"
      >{{ line }}
</code></pre>

      <div class="demo-state">
        <div class="demo-vars">
          <div class="var-box">
            <span class="var-label">i</span>
            <span class="var-value">{{ current.i === null ? '—' : current.i }}</span>
          </div>
          <div class="var-box">
            <span class="var-label">sum</span>
            <span class="var-value">{{ current.sum }}</span>
          </div>
        </div>
        <p class="demo-note">{{ current.note }}</p>
      </div>
    </div>

    <div class="demo-controls">
      <button @click="reset" :disabled="stepIndex === 0">Reset</button>
      <button @click="prev" :disabled="stepIndex === 0">← Trước</button>
      <button @click="next" :disabled="stepIndex === steps.length - 1">Tiếp →</button>
      <span class="demo-progress">Bước {{ stepIndex + 1 }} / {{ steps.length }}</span>
    </div>
  </div>
</template>

<style scoped>
.demo-loop {
  max-width: 960px;
  margin: 2rem auto 3rem;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.demo-title {
  font-weight: 600;
  margin-bottom: 1rem;
}

.demo-body {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.demo-code {
  flex: 1;
  min-width: 260px;
  background: var(--vp-c-bg);
  border-radius: 8px;
  padding: 1rem;
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  line-height: 1.8;
  margin: 0;
}

.demo-code code {
  display: block;
  padding: 0 8px;
  border-radius: 4px;
  white-space: pre;
}

.demo-code code.active {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.demo-state {
  flex: 1;
  min-width: 200px;
}

.demo-vars {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.var-box {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.75rem 1.25rem;
  text-align: center;
}

.var-label {
  display: block;
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.var-value {
  display: block;
  font-size: 22px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.demo-note {
  font-size: 14px;
  color: var(--vp-c-text-2);
  min-height: 40px;
}

.demo-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.demo-controls button {
  padding: 0.4rem 1rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  cursor: pointer;
}

.demo-controls button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.demo-progress {
  margin-left: auto;
  font-size: 13px;
  color: var(--vp-c-text-2);
}
</style>