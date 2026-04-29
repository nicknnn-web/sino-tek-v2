<template>
  <section id="stats" class="stats-section">
    <div class="container">
      <!-- 标题 -->
      <div class="section-header">
        <div class="section-label">
          <span>技术实力</span>
        </div>
        <h2 class="section-title">
          数据 <span class="text-gradient">驱动</span> 发展
        </h2>
      </div>
      
      <!-- 统计数据网格 -->
      <div class="stats-grid">
        <div 
          class="stat-card" 
          v-for="(stat, index) in stats" 
          :key="stat.label"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- 图标 -->
          <div class="stat-icon">
            <span v-html="stat.icon"></span>
          </div>
          
          <!-- 数字 -->
          <div class="stat-number-container">
            <span class="stat-number" :data-target="stat.num">0</span>
            <span class="stat-plus">+</span>
          </div>
          
          <!-- 标签 -->
          <div class="stat-label">{{ stat.label }}</div>
          
          <!-- 进度环 -->
          <div class="stat-progress">
            <div class="progress-ring">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="var(--border-color)" stroke-width="4"/>
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="none" 
                  stroke="var(--neon-cyan)" 
                  stroke-width="4"
                  stroke-linecap="round"
                  :stroke-dasharray="251.2"
                  :stroke-dashoffset="251.2 - (251.2 * stat.num / 100)"
                  class="progress-circle"
                />
              </svg>
            </div>
          </div>
          
          <!-- 装饰 -->
          <div class="stat-decoration">
            <span class="stat-index">{{ String(index + 1).padStart(2, '0') }}</span>
          </div>
        </div>
      </div>
      
      <!-- 组织结构 -->
      <div class="org-section">
        <h3 class="org-title">
          <span class="text-gradient">研发团队</span> 组织架构
        </h3>
        <div class="org-grid">
          <div 
            class="org-card" 
            v-for="(team, index) in orgTeams" 
            :key="team.title"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="org-image">
              <img :src="`/assets/img/team/${team.img}`" :alt="team.title" />
              <div class="org-overlay"></div>
            </div>
            <div class="org-info">
              <h4 class="org-team-title">{{ team.title }}</h4>
              <p class="org-team-desc">{{ team.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 开发流程 -->
      <div class="process-section">
        <h3 class="process-title">
          <span class="text-gradient">标准化</span> 开发流程
        </h3>
        <div class="process-flow">
          <div 
            class="process-step" 
            v-for="(step, index) in devSteps" 
            :key="step.step"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="step-number" :style="{ color: getStepColor(index) }">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="step-content">
              <h4 class="step-title">{{ step.step }}</h4>
              <p class="step-desc">{{ step.desc }}</p>
            </div>
            <div class="step-line"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 背景装饰 -->
    <div class="stats-bg">
      <div class="bg-gradient"></div>
      <div class="bg-particles"></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

// 蓝到绿渐变：01蓝 → 07绿
const getStepColor = (index) => {
  const total = devSteps.length - 1 || 1
  const ratio = index / total
  const r = 0
  const g = Math.round(102 + (170 - 102) * ratio)
  const b = Math.round(204 + (85 - 204) * ratio)
  return `rgb(${r}, ${g}, ${b})`
}

const stats = [
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
    num: 35,
    label: '合作企业及机构'
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    num: 100,
    label: '优质的研发成果'
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
    num: 10,
    label: '每年的合作项目'
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>',
    num: 23,
    label: '经验丰富的工程师'
  }
]

const orgTeams = [
  {
    img: 'team-01.jpg',
    title: '过程管理组',
    desc: '负责项目执行过程改进、文件更新、基线及遗留事件处理方案等。'
  },
  {
    img: 'team-02.jpg',
    title: '研发组',
    desc: '负责为项目制定专业的技术解决方案并保证实施。'
  },
  {
    img: 'team-03.jpg',
    title: '质量保证组',
    desc: '负责按照技术标准和规范对项目产品进行检验，保证产品整体质量。'
  },
  {
    img: 'team-04.jpg',
    title: '运维实施组',
    desc: '负责项目实施运维，现场调配，技术支持等。'
  }
]

const devSteps = [
  { step: '需求分析', desc: '详细了解客户需求，确定项目目标和范围' },
  { step: '项目规划', desc: '制定详细的项目计划，包括时间表、团队和资源分配' },
  { step: '设计阶段', desc: '创建用户界面和体验的设计方案' },
  { step: '开发阶段', desc: '进行前端和后端开发，确保功能实现' },
  { step: '质量保证', desc: '进行全面的测试，确保产品质量和稳定性' },
  { step: '项目部署', desc: '将项目上线，并确保平稳过渡' },
  { step: '后续支持', desc: '提供持续的维护和支持服务' }
]

onMounted(() => {
  // 数字跳动动画
  const numbers = document.querySelectorAll('.stat-number')
  
  const animateNumber = (el) => {
    const target = parseInt(el.dataset.target)
    const duration = 2000
    const start = performance.now()
    
    const update = (currentTime) => {
      const elapsed = currentTime - start
      const progress = Math.min(elapsed / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(easeOutQuart * target)
      
      el.textContent = current
      
      if (progress < 1) {
        requestAnimationFrame(update)
      } else {
        el.textContent = target
      }
    }
    
    requestAnimationFrame(update)
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumber(entry.target)
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })
  
  numbers.forEach(num => observer.observe(num))
})
</script>

<style scoped>
.stats-section {
  position: relative;
  padding: 160px 0;
  background: var(--bg-deep);
  overflow: hidden;
}

/* 标题 */
.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  color: var(--text-primary);
}

/* 统计网格 */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-bottom: 100px;
}

/* 统计卡片 */
.stat-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 40px 32px;
  text-align: center;
  overflow: hidden;
  transition: all var(--transition);
  animation: fade-in-up 0.6s ease-out backwards;
}

.stat-card:hover {
  border-color: var(--border-neon);
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), var(--glow-cyan);
}

/* 图标 */
.stat-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon svg {
  width: 48px;
  height: 48px;
  stroke: var(--neon-cyan);
}

/* 数字 */
.stat-number-container {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
  margin-bottom: 12px;
}

.stat-number {
  font-family: var(--font-display);
  font-size: 56px;
  font-weight: 700;
  color: var(--neon-cyan);
  text-shadow: var(--glow-cyan);
  line-height: 1;
}

.stat-plus {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 600;
  color: var(--neon-cyan);
}

/* 标签 */
.stat-label {
  font-size: 14px;
  color: var(--text-muted);
  letter-spacing: 1px;
}

/* 进度环 */
.stat-progress {
  position: absolute;
  top: 16px;
  right: 16px;
}

.progress-ring {
  width: 48px;
  height: 48px;
}

.progress-circle {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: stroke-dashoffset 2s ease-out;
}

/* 装饰 */
.stat-decoration {
  position: absolute;
  bottom: 16px;
  right: 16px;
}

.stat-index {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 700;
  color: var(--border-color);
  opacity: 0.3;
}

/* 组织结构 */
.org-section {
  margin-bottom: 100px;
}

.org-title {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 48px;
}

.org-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.org-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition);
  animation: fade-in-up 0.6s ease-out backwards;
}

.org-card:hover {
  border-color: var(--border-neon);
  transform: translateY(-4px);
}

.org-image {
  height: 160px;
  overflow: hidden;
  position: relative;
}

.org-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.org-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent, rgba(10, 10, 15, 0.8));
}

.org-info {
  padding: 24px;
}

.org-team-title {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.org-team-desc {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
}

/* 开发流程 */
.process-section {
  margin-top: 80px;
}

.process-title {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 48px;
}

.process-flow {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.process-step {
  position: relative;
  flex: 1;
  text-align: center;
  animation: fade-in-up 0.6s ease-out backwards;
  display: flex;
  flex-direction: column;
}

.step-number {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
}

.step-content {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 24px 16px;
  transition: all var(--transition);
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.process-step:hover .step-content {
  border-color: var(--border-neon);
  box-shadow: var(--glow-cyan);
}

.step-title {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.step-desc {
  font-size: 12px;
  color: var(--text-muted);
  line-height: 1.5;
}

.step-line {
  position: absolute;
  top: 16px;
  right: -8px;
  width: 16px;
  height: 2px;
  background: var(--gradient-neon);
}
.process-step:last-child .step-line { display: none; }

/* 背景装饰 */
.stats-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 400px;
  background: linear-gradient(180deg, var(--bg-dark), transparent);
}

.bg-particles {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 50% 50%, rgba(0, 136, 255, 0.1) 0%, transparent 50%);
}

/* 响应式 */
@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .org-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .process-flow {
    flex-wrap: wrap;
  }
  
  .process-step {
    flex: 1 1 calc(50% - 16px);
  }
  
  .step-line {
    display: none;
  }
}

@media (max-width: 768px) {
  .stats-section {
    padding: 80px 0;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .org-grid {
    grid-template-columns: 1fr;
  }
  
  .process-step {
    flex: 1 1 100%;
  }
  
  .stat-number {
    font-size: 40px;
  }
}
</style>