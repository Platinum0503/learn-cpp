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
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Fixed, locked-down settings — no user-facing controls anymore.
const width = 1100
const height = 420
const text = 'C++'
const fontSize = 230
const colorOne = '#ffffff'
const colorTwo = '#1a52f9'
const colorThree = '#ffffff'
const particleSize = 2.4
const particleGap = 4
const mouseRadius = 110
const mouseForce = 7
const returnEase = 0.08

const canvasEl = ref(null)
let ctx, particles = [], rafId, mouse = { x: 0, y: 0, active: false }, ioObserver
let textMinX = 0, textMaxX = width

function hexToRgb(hex) {
  const h = hex.replace('#', '')
  return {
    r: parseInt(h.substring(0, 2), 16),
    g: parseInt(h.substring(2, 4), 16),
    b: parseInt(h.substring(4, 6), 16)
  }
}

function colorForX(x) {
  const range = textMaxX - textMinX || 1
  const t = (x - textMinX) / range
  const c1 = hexToRgb(colorOne), c2 = hexToRgb(colorTwo), c3 = hexToRgb(colorThree)
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
    this.x = Math.random() * width
    this.y = Math.random() * height
  }
  update() {
    this.x += (this.homeX - this.x) * returnEase
    this.y += (this.homeY - this.y) * returnEase
    if (mouse.active) {
      const dx = this.x - mouse.x, dy = this.y - mouse.y
      const dist = Math.hypot(dx, dy)
      if (dist < mouseRadius && dist > 0.01) {
        const force = (1 - dist / mouseRadius) * mouseForce
        this.x += (dx / dist) * force
        this.y += (dy / dist) * force
      }
    }
  }
  draw() {
    ctx.fillStyle = colorForX(this.homeX)
    ctx.beginPath()
    ctx.arc(this.x, this.y, particleSize, 0, Math.PI * 2)
    ctx.fill()
  }
  scatter() {
    this.x = Math.random() * width
    this.y = Math.random() * height
  }
}

function buildParticles() {
  const off = document.createElement('canvas')
  off.width = width; off.height = height
  const octx = off.getContext('2d')
  octx.fillStyle = '#fff'
  octx.font = `800 ${fontSize}px Arial, sans-serif`
  octx.textAlign = 'center'
  octx.textBaseline = 'middle'
  octx.fillText(text, width / 2, height / 2)
  const data = octx.getImageData(0, 0, width, height).data
  const pts = []
  for (let y = 0; y < height; y += particleGap) {
    for (let x = 0; x < width; x += particleGap) {
      if (data[(y * width + x) * 4 + 3] > 128) pts.push({ x, y })
    }
  }
  if (pts.length) {
    textMinX = Math.min(...pts.map(p => p.x))
    textMaxX = Math.max(...pts.map(p => p.x))
  }
  particles = pts.map(p => new Particle(p.x, p.y))
}

function scatterAll() {
  particles.forEach(p => p.scatter())
}

function onMouseMove(e) {
  const rect = canvasEl.value.getBoundingClientRect()
  mouse.x = (e.clientX - rect.left) * (width / rect.width)
  mouse.y = (e.clientY - rect.top) * (height / rect.height)
  mouse.active = true
}
function onMouseLeave() { mouse.active = false }

function loop() {
  ctx.clearRect(0, 0, width, height)
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
</script>

<style scoped>
.pixel-drift-wrap {
  display: flex;
  justify-content: center;
}
.pixel-drift-canvas {
  max-width: 100%;
  height: auto;
  cursor: crosshair;
}
</style>
