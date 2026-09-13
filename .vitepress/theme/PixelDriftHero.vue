<template>
  <div class="pixel-drift-wrap">
    <canvas
      ref="canvasEl"
      class="pixel-drift-canvas"
      :width="width"
      :height="height"
      @mousemove="onMouseMove"
      @mouseleave="onMouseLeave"
      @click="scatterAll"
    />

    <!-- customization panel -->
    <div class="pd-panel" :class="{ open: panelOpen }">
      <button class="pd-toggle" @click="panelOpen = !panelOpen">
        {{ panelOpen ? 'Đóng tuỳ chỉnh ▲' : 'Tuỳ chỉnh hiệu ứng ▼' }}
      </button>

      <div v-if="panelOpen" class="pd-controls">
        <label>
          Chữ hiển thị
          <input v-model="text" maxlength="6" @input="rebuild" />
        </label>

        <label>
          Cỡ chữ ({{ fontSize }}px)
          <input type="range" min="60" max="220" v-model.number="fontSize" @input="rebuild" />
        </label>

        <label>
          Màu 1
          <input type="color" v-model="colorOne" />
        </label>
        <label>
          Màu 2
          <input type="color" v-model="colorTwo" />
        </label>
        <label>
          Màu 3
          <input type="color" v-model="colorThree" />
        </label>

        <label>
          Cỡ hạt ({{ particleSize }})
          <input type="range" min="1" max="5" step="0.5" v-model.number="particleSize" />
        </label>

        <label>
          Độ dày hạt ({{ particleGap }})
          <input type="range" min="2" max="8" v-model.number="particleGap" @input="rebuild" />
        </label>

        <label>
          Bán kính chuột ({{ mouseRadius }})
          <input type="range" min="20" max="200" v-model.number="mouseRadius" />
        </label>

        <label>
          Lực đẩy chuột ({{ mouseForce }})
          <input type="range" min="1" max="15" v-model.number="mouseForce" />
        </label>

        <button class="pd-replay" @click="scatterAll">Phát lại hiệu ứng</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  initialText: { type: String, default: 'C++' },
  width: { type: Number, default: 800 },
  height: { type: Number, default: 400 }
})

const canvasEl = ref(null)
const panelOpen = ref(false)

const text = ref(props.initialText)
const fontSize = ref(160)
const colorOne = ref('#ffffff')
const colorTwo = ref('#1a52f9')
const colorThree = ref('#ffffff')
const particleSize = ref(2.2)
const particleGap = ref(4)
const mouseRadius = ref(90)
const mouseForce = ref(6)
const returnEase = 0.08

let ctx, particles = [], rafId, mouse = { x: 0, y: 0, active: false }, ioObserver

function hexToRgb(hex) {
  const h = hex.replace('#', '')
  return {
    r: parseInt(h.substring(0, 2), 16),
    g: parseInt(h.substring(2, 4), 16),
    b: parseInt(h.substring(4, 6), 16)
  }
}

function colorForX(x) {
  const t = x / props.width
  const c1 = hexToRgb(colorOne.value), c2 = hexToRgb(colorTwo.value), c3 = hexToRgb(colorThree.value)
  let a, b, localT
  if (t < 0.5) { a = c1; b = c2; localT = t / 0.5 } else { a = c2; b = c3; localT = (t - 0.5) / 0.5 }
  const r = Math.round(a.r + (b.r - a.r) * localT)
  const g = Math.round(a.g + (b.g - a.g) * localT)
  const bl = Math.round(a.b + (b.b - a.b) * localT)
  return `rgb(${r},${g},${bl})`
}

class Particle {
  constructor(homeX, homeY) {
    this.homeX = homeX; this.homeY = homeY
    this.x = Math.random() * props.width
    this.y = Math.random() * props.height
  }
  update() {
    this.x += (this.homeX - this.x) * returnEase
    this.y += (this.homeY - this.y) * returnEase
    if (mouse.active) {
      const dx = this.x - mouse.x, dy = this.y - mouse.y
      const dist = Math.hypot(dx, dy)
      if (dist < mouseRadius.value && dist > 0.01) {
        const force = (1 - dist / mouseRadius.value) * mouseForce.value
        this.x += (dx / dist) * force
        this.y += (dy / dist) * force
      }
    }
  }
  draw() {
    ctx.fillStyle = colorForX(this.homeX)
    ctx.beginPath()
    ctx.arc(this.x, this.y, particleSize.value, 0, Math.PI * 2)
    ctx.fill()
  }
  scatter() {
    this.x = Math.random() * props.width
    this.y = Math.random() * props.height
  }
}

function buildParticles() {
  const off = document.createElement('canvas')
  off.width = props.width; off.height = props.height
  const octx = off.getContext('2d')
  octx.fillStyle = '#fff'
  octx.font = `800 ${fontSize.value}px Arial, sans-serif`
  octx.textAlign = 'center'
  octx.textBaseline = 'middle'
  octx.fillText(text.value, props.width / 2, props.height / 2)
  const data = octx.getImageData(0, 0, props.width, props.height).data
  const pts = []
  for (let y = 0; y < props.height; y += particleGap.value) {
    for (let x = 0; x < props.width; x += particleGap.value) {
      if (data[(y * props.width + x) * 4 + 3] > 128) pts.push({ x, y })
    }
  }
  particles = pts.map(p => new Particle(p.x, p.y))
}

function rebuild() {
  buildParticles()
}

function scatterAll() {
  particles.forEach(p => p.scatter())
}

function onMouseMove(e) {
  const rect = canvasEl.value.getBoundingClientRect()
  mouse.x = (e.clientX - rect.left) * (props.width / rect.width)
  mouse.y = (e.clientY - rect.top) * (props.height / rect.height)
  mouse.active = true
}
function onMouseLeave() { mouse.active = false }

function loop() {
  ctx.clearRect(0, 0, props.width, props.height)
  particles.forEach(p => { p.update(); p.draw() })
  rafId = requestAnimationFrame(loop)
}

onMounted(() => {
  ctx = canvasEl.value.getContext('2d')
  buildParticles()
  loop()
  ioObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) scatterAll() })
  }, { threshold: 0.4 })
  ioObserver.observe(canvasEl.value)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
  if (ioObserver) ioObserver.disconnect()
})

watch([particleGap, fontSize, text], rebuild)
</script>

<style scoped>
.pixel-drift-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.pixel-drift-canvas {
  max-width: 100%;
  height: auto;
  cursor: crosshair;
}
.pd-panel {
  width: 100%;
  max-width: 560px;
  font: 14px/1.4 -apple-system, Segoe UI, Roboto, sans-serif;
}
.pd-toggle {
  width: 100%;
  padding: 8px 14px;
  border: 1px solid var(--vp-c-divider, #444);
  background: transparent;
  color: inherit;
  border-radius: 6px;
  cursor: pointer;
}
.pd-controls {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 16px;
  margin-top: 12px;
  padding: 14px;
  border: 1px solid var(--vp-c-divider, #333);
  border-radius: 8px;
}
.pd-controls label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 13px;
}
.pd-replay {
  grid-column: 1 / -1;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background: #1a52f9;
  color: #fff;
  cursor: pointer;
}
</style>
