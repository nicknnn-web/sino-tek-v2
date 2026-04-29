<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="about-grid">
        <!-- 左侧内容 -->
        <div class="about-content">
          <div class="section-label">
            <span>关于我们</span>
          </div>
          
          <h2 class="about-title">
            深耕行业领域<br>
            <span class="text-gradient">20 年</span>技术沉淀
          </h2>
          
          <p class="about-desc">
            自2004年起，飞鹏公司陆续服务了<span class="highlight">金融、政法科技服务、检验鉴定、医疗、教育</span>等多个行业领域。平均行业服务年限超过5年，最长行业服务年限超过10年。
          </p>
          
          <p class="about-desc">
            能够详细并持续的了解行业领域业务需要，为客户提供精练的专业技术解决方案，获得了客户的信任和支持。
          </p>
          
          <!-- 认证标签 -->
          <div class="cert-tags">
            <div class="cert-tag" v-for="cert in certifications" :key="cert">
              <span class="cert-icon">✓</span>
              <span>{{ cert }}</span>
            </div>
          </div>
          
          <!-- 统计数据 -->
          <div class="about-stats">
            <div class="about-stat">
              <span class="about-stat-number">5</span>
              <span class="about-stat-unit">年+</span>
              <span class="about-stat-label">平均行业服务年限</span>
            </div>
            <div class="about-stat">
              <span class="about-stat-number">10</span>
              <span class="about-stat-unit">年+</span>
              <span class="about-stat-label">最长行业服务年限</span>
            </div>
          </div>
        </div>
        
        <!-- 右侧卡片 -->
        <div class="about-cards">
          <div 
            class="cert-card cyber-card" 
            v-for="(tab, index) in certTabs" 
            :key="tab.id"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="cert-card-header">
              <div class="cert-card-divider"></div>
              <h3 class="cert-card-title">{{ tab.label }}</h3>
            </div>
            <ul class="cert-card-list">
              <li v-for="item in tab.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 背景装饰 -->
    <div class="about-bg">
      <div class="bg-grid"></div>
      <div class="bg-gradient"></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const certifications = ['ISO90001', 'ISO27001', 'CMMI3', '国家高新技术企业']

const certTabs = [
  {
    id: 'cert-national',
    label: '国家认证',
    iconSvg: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2L4 6V13C4 19.63 8.21 25.74 14 27C19.79 25.74 24 19.63 24 13V6L14 2Z" stroke="#0088ff" stroke-width="1.5" stroke-linejoin="round" fill="rgba(0,136,255,0.08)"/>
      <path d="M10 14L12.5 16.5L18 11" stroke="#00c853" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="4" y1="6" x2="14" y2="10" stroke="#0088ff" stroke-width="0.8" stroke-dasharray="2 2"/>
      <line x1="24" y1="6" x2="14" y2="10" stroke="#0088ff" stroke-width="0.8" stroke-dasharray="2 2"/>
      <circle cx="14" cy="5" r="1.5" fill="#00c853" opacity="0.8"/>
    </svg>`,
    items: ['天津市高新技术企业', '国家高新技术企业认证', '软件企业、国科小企业认证']
  },
  {
    id: 'cert-industry',
    label: '行业标准认证',
    iconSvg: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="22" height="18" rx="2" stroke="#0088ff" stroke-width="1.5" fill="rgba(0,136,255,0.08)"/>
      <path d="M9 5V3M14 5V2M19 5V3" stroke="#0088ff" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M8 11H20M8 15H15" stroke="#00c853" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="21" cy="18" r="4" stroke="#00c853" stroke-width="1.5" fill="rgba(0,200,83,0.1)"/>
      <path d="M19.5 18L20.5 19L22.5 17" stroke="#00c853" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="3" y1="8" x2="25" y2="8" stroke="#0088ff" stroke-width="0.6" stroke-dasharray="3 2"/>
    </svg>`,
    items: ['ISO90001 质量管理体系', 'ISO27001 信息安全管理体系', 'CMMI3 软件能力成熟度']
  },
  {
    id: 'cert-software',
    label: '软著认证',
    iconSvg: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="3" width="16" height="22" rx="1.5" stroke="#0088ff" stroke-width="1.5" fill="rgba(0,136,255,0.08)"/>
      <path d="M17 7L21 10L17 13" stroke="#00c853" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" fill="rgba(0,200,83,0.08)"/>
      <path d="M13 21H8M13 17H6M13 13H8" stroke="#0088ff" stroke-width="1.3" stroke-linecap="round" opacity="0.7"/>
      <line x1="5" y1="6" x2="18" y2="6" stroke="#0088ff" stroke-width="0.6" stroke-dasharray="2 2" opacity="0.5"/>
      <circle cx="22" cy="20" r="3" stroke="#00c853" stroke-width="1.2" opacity="0.6"/>
      <path d="M21 20H23M22 19V21" stroke="#00c853" stroke-width="1" opacity="0.6"/>
    </svg>`,
    items: ['软件著作证书 50+ 件', '产品登记证书', '多项技术专利']
  }
]
</script>

<style scoped>
.about-section {
  position: relative;
  padding: 160px 0;
  background: var(--bg-dark);
  overflow: hidden;
}

/* 背景装饰 */
.about-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.bg-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(0, 136, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 136, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
}

.bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 400px;
  background: linear-gradient(180deg, var(--bg-deep), transparent);
}

/* 网格布局 */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* 左侧内容 */
.about-content {
  position: relative;
}

.about-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: 24px;
}

.about-desc {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 16px;
}

.about-desc .highlight {
  color: var(--neon-cyan);
  font-weight: 500;
}

/* 认证标签 */
.cert-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 32px 0;
}

.cert-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: rgba(0, 136, 255, 0.05);
  border: 1px solid var(--border-neon);
  border-radius: var(--radius);
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--neon-cyan);
  transition: all var(--transition);
}

.cert-tag:hover {
  background: rgba(0, 136, 255, 0.1);
  box-shadow: var(--glow-cyan);
  transform: translateY(-2px);
}

.cert-icon {
  color: var(--neon-green);
}

/* 统计数据 */
.about-stats {
  display: flex;
  gap: 48px;
  margin-top: 40px;
}

.about-stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.about-stat-number {
  font-family: var(--font-display);
  font-size: 56px;
  font-weight: 700;
  color: var(--neon-cyan);
  text-shadow: var(--glow-cyan);
  line-height: 1;
}

.about-stat-unit {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 600;
  color: var(--neon-cyan);
}

.about-stat-label {
  font-size: 13px;
  color: var(--text-muted);
  letter-spacing: 1px;
}

/* 右侧卡片 */
.about-cards {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.cert-card {
  animation: fade-in-up 0.6s ease-out backwards;
}

.cert-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.cert-card-icon {
  display: none;
}

.cert-card-divider {
  width: 4px;
  height: 20px;
  background: var(--gradient-neon);
  border-radius: 2px;
  flex-shrink: 0;
}

.cert-card-title {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--text-primary);
}

.cert-card-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cert-card-list li {
  position: relative;
  padding-left: 20px;
  font-size: 14px;
  color: var(--text-secondary);
}

.cert-card-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  background: var(--neon-cyan);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--neon-cyan);
}

/* 响应式 */
@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .about-stats {
    gap: 32px;
  }
  
  .about-stat-number {
    font-size: 40px;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 80px 0;
  }
  
  .about-stats {
    flex-direction: column;
    gap: 24px;
  }
}
</style>
