<template>
  <section id="services" class="services-section">
    <div class="container">
      <!-- 标题 -->
      <div class="section-header">
        <div class="section-label">
          <span>核心业务</span>
        </div>
        <h2 class="section-title">
          全方位 <span class="text-gradient">技术服务</span> 能力
        </h2>
        <p class="section-desc">
          从需求分析到项目部署，提供完整的软件开发生命周期服务
        </p>
      </div>
      
      <!-- 服务卡片 -->
      <div class="services-grid">
        <div 
          class="service-card" 
          v-for="(service, index) in services" 
          :key="service.id"
          :class="{ featured: service.featured }"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- 卡片背景 -->
          <div class="card-bg"></div>
          
          <!-- 标题 -->
          <h3 class="service-title">{{ service.title }}</h3>
          
          <!-- 分隔线 -->
          <div class="service-divider"></div>
          
          <!-- 描述 -->
          <p class="service-desc">{{ service.desc }}</p>
          
          <!-- 特性列表 -->
          <ul class="service-features">
            <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
          </ul>
          
          <!-- 链接 -->
          <a href="#contact" class="service-link">
            <span>了解详情</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          
          <!-- 装饰 -->
          <div class="card-decoration">
            <span class="card-number">{{ String(index + 1).padStart(2, '0') }}</span>
          </div>
        </div>
      </div>
      
      <!-- 系统分类 -->
      <div class="system-categories">
        <h3 class="categories-title">
          <span class="text-gradient">系统类型</span> 覆盖范围
        </h3>
        <div class="categories-grid">
          <div 
            class="category-item" 
            v-for="(cat, index) in categories" 
            :key="cat.title"
            :class="{ active: cat.active }"
          >
            <div class="category-icon" v-html="cat.icon"></div>
            <h4 class="category-title">{{ cat.title }}</h4>
            <p class="category-desc">{{ cat.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 背景装饰 -->
    <div class="services-bg">
      <div class="bg-line bg-line-1"></div>
      <div class="bg-line bg-line-2"></div>
      <div class="bg-circle"></div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: 'management',
    title: '管理系统开发',
    desc: '企业级管理系统定制开发，覆盖核心业务流程',
    features: ['ERP 企业资源规划', 'CRM 客户关系管理', 'HRM 人力资源系统', '财务管理系统']
  },
  {
    id: 'cloud',
    title: '云计算平台',
    desc: '云原生架构设计与实施，支持弹性扩展',
    features: ['IaaS 基础设施服务', 'PaaS 平台服务', 'SaaS 软件服务', '云迁移与优化'],
    featured: true
  },
  {
    id: 'mobile',
    title: '移动端开发',
    desc: '跨平台移动应用开发，覆盖主流生态',
    features: ['iOS / Android 原生', '微信小程序', '支付宝小程序', '跨平台开发']
  }
]

const categories = [
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4"/></svg>',
    title: '管理系统',
    desc: 'ERP、CRM、HRM、SCM、CMS、财务管理、项目管理、医疗信息、教育管理、资产管理、知识管理等',
    active: false
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17.5 19H9a7 7 0 116.71-9h1.79a4.5 4.5 0 110 9z"/></svg>',
    title: '云计算平台',
    desc: '基础设施即服务（IaaS）、平台即服务（PaaS）和软件即服务（SaaS）等',
    active: true
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>',
    title: '移动端',
    desc: 'iOS应用、Android应用、微信小程序、支付宝小程序、百度智能小程序、字节跳动小程序、快应用等',
    active: false
  }
]
</script>

<style scoped>
.services-section {
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
  margin-bottom: 16px;
}

.section-desc {
  font-size: 16px;
  color: var(--text-secondary);
  max-width: 500px;
  margin: 0 auto;
}

/* 服务网格 */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 100px;
}

/* 服务卡片 */
.service-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 48px 40px;
  overflow: hidden;
  transition: all var(--transition);
  animation: fade-in-up 0.6s ease-out backwards;
}

.card-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent, rgba(0, 136, 255, 0.02));
  opacity: 0;
  transition: opacity var(--transition);
}

.service-card:hover {
  border-color: var(--border-neon);
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), var(--glow-cyan);
}

.service-card:hover .card-bg {
  opacity: 1;
}

/* Featured 卡片 */
.service-card.featured {
  border-color: var(--border-neon);
  background: linear-gradient(135deg, var(--bg-card), rgba(0, 136, 255, 0.05));
}

.service-card.featured::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-neon);
}

/* 标题和描述 */
.service-title {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
  letter-spacing: 0.5px;
}

.service-divider {
  width: 32px;
  height: 2px;
  background: var(--gradient-neon);
  margin-bottom: 16px;
  opacity: 0.7;
}

.service-desc {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 24px;
  line-height: 1.6;
}

/* 特性列表 */
.service-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.service-features li {
  position: relative;
  padding-left: 20px;
  font-size: 13px;
  color: var(--text-muted);
}

.service-features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 6px;
  width: 8px;
  height: 8px;
  border: 1px solid var(--neon-cyan);
  border-radius: 2px;
}

/* 链接 */
.service-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--neon-cyan);
  transition: all var(--transition);
}

.service-link:hover {
  gap: 12px;
  text-shadow: 0 0 10px var(--neon-cyan);
}

/* 卡片装饰 */
.card-decoration {
  position: absolute;
  top: 20px;
  right: 20px;
}

.card-number {
  font-family: var(--font-display);
  font-size: 48px;
  font-weight: 700;
  color: var(--border-color);
  line-height: 1;
  opacity: 0.3;
}

/* 系统分类 */
.system-categories {
  margin-top: 80px;
}

.categories-title {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 48px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.category-item {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 32px;
  text-align: center;
  transition: all var(--transition);
}

.category-item.active {
  border-color: var(--border-neon);
  background: linear-gradient(135deg, var(--bg-card), rgba(0, 136, 255, 0.03));
}

.category-item:hover {
  border-color: var(--border-neon);
  transform: translateY(-4px);
}

.category-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-icon svg {
  width: 48px;
  height: 48px;
  stroke: var(--neon-cyan);
}

.category-title {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
  letter-spacing: 0.5px;
}

.category-desc {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
}

/* 背景装饰 */
.services-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.bg-line {
  position: absolute;
  width: 1px;
  height: 400px;
  background: linear-gradient(180deg, transparent, var(--border-neon), transparent);
  opacity: 0.2;
}

.bg-line-1 {
  left: 20%;
  top: 0;
}

.bg-line-2 {
  right: 20%;
  bottom: 0;
}

.bg-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  border: 1px solid var(--border-color);
  border-radius: 50%;
  opacity: 0.1;
}

/* 响应式 */
@media (max-width: 1024px) {
  .services-grid,
  .categories-grid {
    grid-template-columns: 1fr;
  }
  
  .service-card {
    padding: 32px 24px;
  }
}

@media (max-width: 768px) {
  .services-section {
    padding: 80px 0;
  }
  
  .section-header {
    margin-bottom: 48px;
  }
}
</style>
