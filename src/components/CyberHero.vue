<template>
  <section id="hero" class="hero-section" ref="heroRef">

    <!-- 透视网格背景 -->
    <div class="perspective-grid"></div>

    <!-- 扫描线光栅 -->
    <div class="scanline-overlay"></div>

    <!-- 粒子背景（移除，使用全局粒子） -->
    <!-- <div id="particles-js" class="particles-bg"></div> -->

    <!-- 网格背景 -->
    <div class="grid-bg"></div>

    <!-- 渐变光晕 -->
    <div class="gradient-orbs">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>

    <!-- HUD 装饰 — 左上角 -->
    <div class="hud hud-tl">
      <div class="hud-line hud-line-h"></div>
      <div class="hud-line hud-line-v"></div>
      <span class="hud-text">SYS://FEIPENG.SHENGYUAN.TECH</span>
      <span class="hud-text">STATUS: <span class="hud-ok">ONLINE</span></span>
    </div>

    <!-- HUD 装饰 — 右上角 -->
    <div class="hud hud-tr">
      <div class="hud-line hud-line-h hud-line-right"></div>
      <div class="hud-line hud-line-v hud-line-right"></div>
      <span class="hud-text align-right">{{ currentTime }}</span>
      <span class="hud-text align-right">FRAME://<span class="hud-val">{{ frameRate }}</span> FPS</span>
    </div>

    <!-- HUD 装饰 — 左下角 -->
    <div class="hud hud-bl">
      <div class="hud-line hud-line-h"></div>
      <div class="hud-line hud-line-v"></div>
      <span class="hud-text">VERSION 3.0</span>
      <span class="hud-text">BUILD: 2026.04.29</span>
    </div>

    <!-- HUD 装饰 — 右下角 -->
    <div class="hud hud-br">
      <div class="hud-line hud-line-h hud-line-right"></div>
      <div class="hud-line hud-line-v hud-line-right"></div>
      <span class="hud-text align-right">LAT: 39.1256°N</span>
      <span class="hud-text align-right">LON: 117.2042°E</span>
    </div>

    <!-- 主内容（带视差） -->
    <div class="hero-content" ref="heroContent">
      <!-- 顶部标签 -->
      <div class="hero-tag">
        <span class="tag-line"></span>
        <span class="tag-text">SOFTWARE DEVELOPMENT SINCE 2004</span>
      </div>

      <!-- 主标题 -->
      <h1 class="hero-title">
        为行业提供<br>
        <span class="text-neon">量身定制</span>的<br>
        优秀解决方案
      </h1>

      <!-- 霓虹打字机标语 -->
      <div class="hero-typing">
        <span class="typing-prefix">></span>
        <span class="typing-text" ref="typingRef"></span>
        <span class="typing-cursor">_</span>
      </div>

      <!-- 副标题 -->
      <p class="hero-subtitle">
        专注软件定制开发 <span class="highlight">20 年</span> · 服务金融、司法、医疗、教育等关键行业
      </p>

      <!-- CTA 按钮 -->
      <div class="hero-cta">
        <a href="#services" class="btn-neon btn-neon-filled">
          <span>探索服务</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="#about" class="btn-neon">
          <span>了解更多</span>
        </a>
      </div>

      <!-- 数据展示 -->
      <div class="hero-stats">
        <div class="stat-item">
          <span class="stat-number" data-target="20">0</span>
          <span class="stat-unit">年+</span>
          <span class="stat-label">行业经验</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number" data-target="50">0</span>
          <span class="stat-unit">+</span>
          <span class="stat-label">软件著作权</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number" data-target="35">0</span>
          <span class="stat-unit">+</span>
          <span class="stat-label">合作企业</span>
        </div>
      </div>
    </div>

    <!-- 扫描提示器 -->
    <div class="scan-beam"></div>

    <!-- 滚动提示 -->
    <div class="scroll-indicator">
      <div class="scroll-line"></div>
      <span>SCROLL</span>
    </div>

    <!-- 装饰元素 -->
    <div class="hero-decoration">
      <div class="deco-line deco-line-1"></div>
      <div class="deco-line deco-line-2"></div>
      <div class="deco-circle"></div>
      <div class="deco-circle deco-circle-2"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const heroRef = ref(null)
const heroContent = ref(null)
const typingRef = ref(null)
const currentTime = ref('')
const frameRate = ref(60)

let animFrameId = null
let fpsInterval = null

const taglines = [
  '为行业提供量身定制的优秀解决方案',
  '20年深耕 · 50+软件著作权 · 35+合作企业',
  '金融 · 司法 · 医疗 · 教育 · 关键行业全覆盖',
  '天津飞鹏盛元科技 · 专业软件定制开发'
]

// 打字机效果
const typeText = (text, el, speed = 50) => {
  let i = 0
  el.textContent = ''
  const type = () => {
    if (i < text.length) {
      el.textContent += text[i++]
      animFrameId = setTimeout(type, speed)
    } else {
      setTimeout(() => {
        const next = (taglines.indexOf(text) + 1) % taglines.length
        typeText(taglines[next], el)
      }, 2000)
    }
  }
  type()
}

// HUD 时间更新
const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('zh-CN', {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
  })
}

// FPS 计算
let lastTime = performance.now()
let frameCount = 0
const updateFPS = () => {
  frameCount++
  const now = performance.now()
  if (now - lastTime >= 1000) {
    frameRate.value = frameCount
    frameCount = 0
    lastTime = now
  }
}

// 数字跳动动画
const animateNumber = (el) => {
  const target = parseInt(el.dataset.target)
  const duration = 2000
  const start = performance.now()
  const easeOutQuart = 1 - Math.pow(1 - (performance.now() - start) / duration, 4)

  const update = (currentTime) => {
    const elapsed = currentTime - start
    const progress = Math.min(elapsed / duration, 1)
    const ease = 1 - Math.pow(1 - progress, 4)
    el.textContent = Math.floor(ease * target)
    if (progress < 1) requestAnimationFrame(update)
    else el.textContent = target
  }
  requestAnimationFrame(update)
}

// 鼠标视差
const handleMouseMove = (e) => {
  if (!heroContent.value) return
  const { innerWidth, innerHeight } = window
  const x = (e.clientX / innerWidth - 0.5) * 2
  const y = (e.clientY / innerHeight - 0.5) * 2
  heroContent.value.style.transform = `translate(${x * 12}px, ${y * 8}px)`
}

const resetParallax = () => {
  if (heroContent.value) heroContent.value.style.transform = 'translate(0, 0)'
}

onMounted(() => {
  // 打字机
  if (typingRef.value) typeText(taglines[0], typingRef.value)

  // HUD 时间
  updateTime()
  setInterval(updateTime, 1000)

  // FPS
  const fpsLoop = () => {
    updateFPS()
    fpsInterval = requestAnimationFrame(fpsLoop)
  }
  fpsInterval = requestAnimationFrame(fpsLoop)

  // 数字动画
  const numbers = document.querySelectorAll('.stat-number')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumber(entry.target)
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })
  numbers.forEach(num => observer.observe(num))

  // 鼠标视差
  heroRef.value?.addEventListener('mousemove', handleMouseMove)
  heroRef.value?.addEventListener('mouseleave', resetParallax)
})

onUnmounted(() => {
  clearTimeout(animFrameId)
  cancelAnimationFrame(fpsInterval)
  heroRef.value?.removeEventListener('mousemove', handleMouseMove)
  heroRef.value?.removeEventListener('mouseleave', resetParallax)
})
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--bg-deep);
}

/* ========== 透视网格动画 ========== */
.perspective-grid {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 200%;
  height: 50%;
  background-image:
    linear-gradient(rgba(0, 136, 255, 0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 136, 255, 0.15) 1px, transparent 1px);
  background-size: 60px 60px;
  transform-origin: center bottom;
  transform: translateX(-50%) perspective(300px) rotateX(60deg);
  animation: grid-move 20s linear infinite;
  z-index: 1;
}

@keyframes grid-move {
  0% { background-position: 0 0; }
  100% { background-position: 0 60px; }
}

/* ========== 全息扫描线 ========== */
.scanline-overlay {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(0, 136, 255, 0.02) 3px,
    rgba(0, 136, 255, 0.02) 4px
  );
  pointer-events: none;
  z-index: 2;
  animation: scanline-flicker 4s ease-in-out infinite;
}

@keyframes scanline-flicker {
  0%, 95%, 100% { opacity: 1; }
  96% { opacity: 0.7; }
  97% { opacity: 1; }
  98% { opacity: 0.6; }
}

/* ========== 扫描光束 ========== */
.scan-beam {
  position: absolute;
  top: -2px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(0, 136, 255, 0.6) 30%,
    rgba(0, 200, 83, 0.8) 50%,
    rgba(0, 136, 255, 0.6) 70%,
    transparent 100%
  );
  box-shadow: 0 0 20px rgba(0, 136, 255, 0.4);
  z-index: 20;
  animation: scan-down 4s ease-in-out infinite;
  pointer-events: none;
}

@keyframes scan-down {
  0% { top: -5px; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { top: 100vh; opacity: 0; }
}

/* ========== HUD 装饰 ========== */
.hud {
  position: absolute;
  padding: 16px 20px;
  z-index: 15;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hud-tl { top: 32px; left: 32px; }
.hud-tr { top: 32px; right: 32px; }
.hud-bl { bottom: 80px; left: 32px; }
.hud-br { bottom: 80px; right: 32px; }

.hud-line {
  position: absolute;
  background: rgba(0, 136, 255, 0.4);
}
.hud-line-h {
  top: 0; left: 0;
  width: 24px; height: 1px;
  animation: hud-grow-h 1s ease-out forwards;
}
.hud-line-v {
  top: 0; left: 0;
  width: 1px; height: 24px;
  animation: hud-grow-v 1s ease-out forwards;
}
.hud-line-right {
  left: auto; right: 0;
  animation-name: hud-grow-h-reverse;
}
.hud-tr .hud-line-v,
.hud-br .hud-line-v {
  left: auto; right: 0;
  animation-name: hud-grow-v-reverse;
}

@keyframes hud-grow-h {
  from { width: 0; }
  to { width: 24px; }
}
@keyframes hud-grow-v {
  from { height: 0; }
  to { height: 24px; }
}
@keyframes hud-grow-h-reverse {
  from { width: 0; }
  to { width: 24px; }
}
@keyframes hud-grow-v-reverse {
  from { height: 0; }
  to { height: 24px; }
}

.hud-text {
  font-family: var(--font-display);
  font-size: 10px;
  letter-spacing: 1px;
  color: rgba(0, 136, 255, 0.7);
  text-shadow: 0 0 8px rgba(0, 136, 255, 0.5);
  animation: hud-flicker 8s ease-in-out infinite;
}
.hud-ok {
  color: var(--neon-green);
  text-shadow: 0 0 8px var(--neon-green);
  animation: neon-flicker 3s ease-in-out infinite;
}
.hud-val {
  color: rgba(0, 200, 83, 0.8);
}
.align-right { text-align: right; }

@keyframes hud-flicker {
  0%, 90%, 100% { opacity: 1; }
  91% { opacity: 0.4; }
  92% { opacity: 1; }
  94% { opacity: 0.6; }
  95% { opacity: 1; }
}

/* 粒子背景 */
.particles-bg {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

/* 网格背景 */
.grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 136, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 136, 255, 0.04) 1px, transparent 1px);
  background-size: 80px 80px;
  pointer-events: none;
  z-index: 2;
}

/* 渐变光晕 */
.gradient-orbs {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.25;
  animation: float 8s ease-in-out infinite;
}

.orb-1 {
  width: 700px;
  height: 700px;
  background: var(--neon-cyan);
  top: -250px;
  right: -150px;
}
.orb-2 {
  width: 500px;
  height: 500px;
  background: var(--neon-magenta);
  bottom: -150px;
  left: -100px;
  animation-delay: 2s;
}
.orb-3 {
  width: 400px;
  height: 400px;
  background: var(--neon-purple);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
}

/* ========== 主内容 ========== */
.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 900px;
  padding: 0 24px;
  transition: transform 0.3s ease-out;
  will-change: transform;
}

/* 顶部标签 */
.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
  animation: fade-in-up 0.8s ease-out;
}

.tag-line {
  width: 40px;
  height: 2px;
  background: var(--gradient-neon);
  box-shadow: var(--glow-cyan);
}

.tag-text {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 3px;
  color: var(--neon-cyan);
  text-shadow: 0 0 10px var(--neon-cyan);
  animation: neon-flicker 5s ease-in-out infinite;
}

/* 主标题 */
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(36px, 7vw, 72px);
  font-weight: 700;
  line-height: 1.3;
  color: var(--text-primary);
  margin-bottom: 16px;
  animation: fade-in-up 0.8s ease-out 0.2s backwards;
  text-shadow: 0 0 40px rgba(0, 136, 255, 0.2);
}

.hero-title .text-neon {
  background: linear-gradient(135deg, var(--neon-cyan), var(--neon-green));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 20px rgba(0, 136, 255, 0.6));
  animation: neon-glow-pulse 3s ease-in-out infinite;
}

@keyframes neon-glow-pulse {
  0%, 100% { filter: drop-shadow(0 0 15px rgba(0, 136, 255, 0.5)); }
  50% { filter: drop-shadow(0 0 30px rgba(0, 200, 83, 0.8)); }
}

/* ========== 打字机 ========== */
.hero-typing {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
  animation: fade-in-up 0.8s ease-out 0.35s backwards;
  min-height: 32px;
}

.typing-prefix {
  font-family: var(--font-display);
  font-size: 14px;
  color: var(--neon-green);
  text-shadow: 0 0 10px var(--neon-green);
  animation: neon-flicker 2s ease-in-out infinite;
}

.typing-text {
  font-family: var(--font-display);
  font-size: 14px;
  letter-spacing: 1px;
  color: rgba(0, 200, 83, 0.9);
  text-shadow: 0 0 10px rgba(0, 200, 83, 0.5);
}

.typing-cursor {
  font-family: var(--font-display);
  font-size: 14px;
  color: var(--neon-green);
  animation: blink 0.8s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* ========== 霓虹闪烁 ========== */
@keyframes neon-flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    opacity: 1;
    text-shadow:
      0 0 4px currentColor,
      0 0 10px currentColor,
      0 0 20px currentColor;
  }
  20%, 24%, 55% {
    opacity: 0.6;
    text-shadow: none;
  }
}

/* 副标题 */
.hero-subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 48px;
  animation: fade-in-up 0.8s ease-out 0.5s backwards;
}

.hero-subtitle .highlight {
  color: var(--neon-cyan);
  font-weight: 600;
  text-shadow: 0 0 10px var(--neon-cyan);
  animation: neon-flicker 4s ease-in-out infinite;
}

/* CTA 按钮 */
.hero-cta {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 64px;
  animation: fade-in-up 0.8s ease-out 0.7s backwards;
}

/* 数据展示 */
.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  animation: fade-in-up 0.8s ease-out 0.9s backwards;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stat-number {
  font-family: var(--font-display);
  font-size: 48px;
  font-weight: 700;
  color: var(--neon-cyan);
  text-shadow: 0 0 20px rgba(0, 136, 255, 0.6);
  line-height: 1;
  animation: stat-glow 2s ease-in-out infinite;
}

@keyframes stat-glow {
  0%, 100% { text-shadow: 0 0 15px rgba(0, 136, 255, 0.5); }
  50% { text-shadow: 0 0 30px rgba(0, 200, 83, 0.8); }
}

.stat-unit {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 600;
  color: var(--neon-green);
}

.stat-label {
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: 1px;
  text-transform: uppercase;
}

.stat-divider {
  width: 1px;
  height: 48px;
  background: linear-gradient(180deg, transparent, var(--border-neon), transparent);
}

/* 滚动提示 */
.scroll-indicator {
  position: absolute;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  z-index: 10;
  animation: fade-in-up 0.8s ease-out 1.2s backwards;
}

.scroll-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(180deg, var(--neon-cyan), transparent);
  animation: scroll-pulse 2s ease-in-out infinite;
}

.scroll-indicator span {
  font-family: var(--font-display);
  font-size: 10px;
  letter-spacing: 3px;
  color: var(--text-muted);
  writing-mode: vertical-rl;
}

@keyframes scroll-pulse {
  0%, 100% { opacity: 1; transform: scaleY(1); }
  50% { opacity: 0.4; transform: scaleY(0.7); }
}

/* 装饰元素 */
.hero-decoration {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 5;
}

.deco-line {
  position: absolute;
  background: linear-gradient(90deg, transparent, var(--border-neon), transparent);
  height: 1px;
}

.deco-line-1 { top: 20%; left: 0; right: 0; opacity: 0.2; }
.deco-line-2 { bottom: 20%; left: 0; right: 0; opacity: 0.2; }

.deco-circle {
  position: absolute;
  top: 50%;
  right: 8%;
  transform: translateY(-50%);
  width: 350px;
  height: 350px;
  border: 1px solid var(--border-neon);
  border-radius: 50%;
  opacity: 0.15;
  animation: rotate-slow 40s linear infinite;
}
.deco-circle::before {
  content: '';
  position: absolute;
  inset: 25px;
  border: 1px solid var(--border-neon);
  border-radius: 50%;
  opacity: 0.4;
}
.deco-circle-2 {
  width: 250px;
  height: 250px;
  top: 55%;
  right: 12%;
  opacity: 0.1;
  animation-direction: reverse;
  animation-duration: 30s;
}

@keyframes rotate-slow {
  from { transform: translateY(-50%) rotate(0deg); }
  to { transform: translateY(-50%) rotate(360deg); }
}

/* ========== fade-in-up ========== */
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 响应式 */
@media (max-width: 768px) {
  .hero-stats {
    flex-direction: column;
    gap: 24px;
  }
  .stat-divider {
    width: 80px;
    height: 1px;
  }
  .hero-cta { flex-direction: column; align-items: center; }
  .deco-circle, .deco-circle-2 { display: none; }
  .stat-number { font-size: 36px; }
  .hud { display: none; }
  .hero-content { max-width: 100%; }
}
</style>
