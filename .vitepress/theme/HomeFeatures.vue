<script setup>
</script>

<template>
  <div class="home-features">
    <div class="feature-card">
      <div class="feature-text">
        <h3>Con trỏ & Bộ nhớ</h3>
        <p>Hiểu pointer, reference, dynamic memory — phần khó nhất của C++ được giải thích rõ ràng.</p>
      </div>
      <div class="feature-visual ptr-visual">
        <div class="box">ptr</div>
        <div class="arrow">→</div>
        <div class="box val">42</div>
      </div>
    </div>

    <div class="feature-card">
      <div class="feature-text">
        <h3>Lập trình hướng đối tượng</h3>
        <p>Class, Object, Kế thừa, Đa hình, Encapsulation với ví dụ thực tế.</p>
      </div>
      <div class="feature-visual oop-visual">
        <div class="box class-box">Class</div>
        <div class="obj-group">
          <div class="box obj1">obj</div>
          <div class="box obj2">obj</div>
        </div>
      </div>
    </div>

    <div class="feature-card">
      <div class="feature-text">
        <h3>Chạy code từng bước</h3>
        <p>Visualizer minh họa từng dòng code thực thi, giúp hiểu logic nhanh hơn.</p>
      </div>
      <div class="feature-visual code-visual">
        <div class="code-line">int i = 0;</div>
        <div class="code-line">i++;</div>
        <div class="code-line">cout &lt;&lt; i;</div>
        <div class="scanner"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px 64px;
}
@media (max-width: 768px) {
  .home-features { grid-template-columns: 1fr; }
}

.feature-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 20px 24px;
  background: var(--vp-c-bg-soft);
  transition: transform 0.25s ease, border-color 0.25s ease;
  overflow: hidden;
}
.feature-card:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-brand-1);
}

.feature-text h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}
.feature-text p {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin: 0;
}

.feature-visual {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, opacity 0.35s ease, margin-top 0.35s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}
.feature-card:hover .feature-visual {
  max-height: 80px;
  opacity: 1;
  margin-top: 16px;
}

.ptr-visual .box {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  border-radius: 6px;
  padding: 6px 10px;
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
}
.ptr-visual .arrow {
  color: var(--vp-c-brand-1);
  font-weight: 700;
}
.feature-card:hover .ptr-visual .arrow {
  animation: arrowPulse 1s ease-in-out infinite;
}
.ptr-visual .val {
  color: var(--vp-c-brand-1);
  font-weight: 700;
}

@keyframes arrowPulse {
  0%, 100% { transform: translateX(0); opacity: 0.6; }
  50% { transform: translateX(6px); opacity: 1; }
}

.oop-visual {
  gap: 16px;
}
.oop-visual .class-box {
  border: 1px dashed var(--vp-c-brand-1);
  background: var(--vp-c-bg);
  border-radius: 6px;
  padding: 6px 10px;
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  color: var(--vp-c-brand-1);
}
.obj-group {
  display: flex;
  gap: 6px;
}
.obj-group .box {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  border-radius: 6px;
  padding: 6px 10px;
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  opacity: 0;
}
.feature-card:hover .obj1 {
  animation: fadeInObj 1.4s ease infinite;
}
.feature-card:hover .obj2 {
  animation: fadeInObj 1.4s ease infinite 0.4s;
}
@keyframes fadeInObj {
  0% { opacity: 0; transform: scale(0.8); }
  30% { opacity: 1; transform: scale(1); }
  70% { opacity: 1; }
  100% { opacity: 0; transform: scale(0.8); }
}

.code-visual {
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  color: var(--vp-c-text-2);
}
.code-visual .code-line {
  padding: 2px 6px;
  width: 100%;
}
.code-visual .scanner {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 20px;
  background: var(--vp-c-brand-soft);
  border-radius: 4px;
  opacity: 0;
}
.feature-card:hover .scanner {
  animation: scanDown 1.8s ease-in-out infinite;
}
@keyframes scanDown {
  0% { top: 0; opacity: 0.8; }
  33% { top: 20px; opacity: 0.8; }
  66% { top: 40px; opacity: 0.8; }
  100% { top: 0; opacity: 0.8; }
}

@media (prefers-reduced-motion: reduce) {
  .feature-visual, .ptr-visual .arrow, .obj1, .obj2, .scanner {
    animation: none !important;
    transition: none !important;
  }
}
</style>
