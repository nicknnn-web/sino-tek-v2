<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <!-- 标题 -->
      <div class="section-header">
        <div class="section-label">
          <span>项目案例</span>
        </div>
        <h2 class="section-title">
          研发成果 <span class="text-gradient">展示</span>
        </h2>
        <p class="section-desc">
          精选代表性项目，展示技术实力与行业经验
        </p>
      </div>
      
      <!-- 项目网格 -->
      <div class="projects-grid">
        <div 
          class="project-card" 
          v-for="(project, index) in projects" 
          :key="project.id"
          :style="{ animationDelay: `${index * 0.1}s` }"
          @click="selectedProject = project"
        >
          <!-- 项目图片 -->
          <div class="project-image">
            <img :src="`/assets/img/projects/${project.img}`" :alt="project.title" />
            <div class="project-overlay">
              <span class="view-btn">查看详情</span>
            </div>
          </div>
          
          <!-- 项目信息 -->
          <div class="project-info">
            <div class="project-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <h3 class="project-title" v-html="project.title.replace('\n', '<br>')"></h3>
            <p class="project-desc">{{ project.desc }}</p>
            <div class="project-tags">
              <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
          
          <!-- 霓虹边框 -->
          <div class="project-border"></div>
        </div>
      </div>
    </div>
    
    <!-- 项目详情弹窗 -->
    <div class="project-modal" v-if="selectedProject" @click.self="selectedProject = null">
      <div class="modal-content">
        <button class="modal-close" @click="selectedProject = null">×</button>
        <div class="modal-image">
          <img :src="`/assets/img/projects/${selectedProject.img}`" :alt="selectedProject.title" />
        </div>
        <div class="modal-info">
          <h3 class="modal-title" v-html="selectedProject.title.replace('\n', '<br>')"></h3>
          <p class="modal-desc">{{ selectedProject.desc }}</p>
          <div class="modal-tags">
            <span class="tag" v-for="tag in selectedProject.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 背景装饰 -->
    <div class="projects-bg">
      <div class="bg-grid"></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedProject = ref(null)

const projects = [
  {
    id: 1,
    title: '阿波罗麻醉质控系统',
    desc: '建立了完整的围麻醉期工作流程，以及电子麻醉医嘱、医护工作绩效、质控系统各种报表的自动生成与下载等，严格根据国家最新麻醉质量控制中心要求设计。',
    img: 'project-01.jpg',
    tags: ['医疗', '质控系统', '移动端']
  },
  {
    id: 2,
    title: '科技项目管理平台',
    desc: '主要实现科技项目全流程统一管理，为资金预算、项目申请、项目审评、项目立项、协议签订、年度检查、经费验收等项目管理工作提供了全面的在线服务。',
    img: 'project-02.jpg',
    tags: ['政务', '管理平台', '全流程']
  },
  {
    id: 3,
    title: '津门便民支付APP',
    desc: '与津门日报工业联盟合作，主要为市民的生活缴费提供便利服务。包括交通违章网款缴纳，水电煤气费用缴纳，医院预约挂号缴费等日常便民缴费功能。',
    img: 'project-03.jpg',
    tags: ['民生', '移动支付', '便民服务']
  },
  {
    id: 4,
    title: '天津市科技计划项目\n管理信息系统APP',
    desc: 'APP主要为科技项目管理平台提供辅助业务操作支持，包含两部分核心功能：业务审批流程支持和业务数据查询统计。',
    img: 'project-04.jpg',
    tags: ['政务', '移动端', '审批系统']
  },
  {
    id: 5,
    title: '阿波罗麻醉质控\n互联平台系统',
    desc: '主要分为系统平台和移动巡访记录两部分。移动巡访记录主要为系统平台提供辅助支持服务，方便医护人员进行每日的移动巡访记录，减轻医务人员的书写记录负担。',
    img: 'project-05.jpg',
    tags: ['医疗', '物联网', '移动应用']
  },
  {
    id: 6,
    title: '电力电子APP',
    desc: '主要为电力系统的设备提供运行情况统计的功能，对电力系统业务线路的全部设备进行监控，包括摄像头、麦克风、温湿度传感器、智能断路终端等。',
    img: 'project-06.jpg',
    tags: ['物联网', '监控', '数据分析']
  }
]
</script>

<style scoped>
.projects-section {
  position: relative;
  padding: 160px 0;
  background: var(--bg-dark);
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
}

/* 项目网格 */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

/* 项目卡片 */
.project-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition);
  animation: fade-in-up 0.6s ease-out backwards;
}

.project-card:hover {
  border-color: var(--border-neon);
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

/* 项目图片 */
.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 15, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-btn {
  padding: 12px 24px;
  background: var(--gradient-neon);
  color: var(--bg-deep);
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: var(--radius);
}

/* 项目信息 */
.project-info {
  padding: 24px;
  position: relative;
}

.project-number {
  position: absolute;
  top: 16px;
  right: 16px;
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 700;
  color: var(--border-color);
  opacity: 0.3;
}

.project-title {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
  line-height: 1.4;
}

.project-desc {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 标签 */
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 4px 12px;
  background: rgba(0, 136, 255, 0.05);
  border: 1px solid var(--border-neon);
  border-radius: var(--radius-sm);
  font-size: 11px;
  color: var(--neon-cyan);
  letter-spacing: 0.5px;
}

/* 霓虹边框 */
.project-border {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-lg);
  pointer-events: none;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: var(--radius-lg);
  background: var(--gradient-neon);
  z-index: -1;
  opacity: 0;
  transition: opacity var(--transition);
}

.project-card:hover::before {
  opacity: 0.5;
  animation: border-glow 2s linear infinite;
}

/* 项目详情弹窗 */
.project-modal {
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 15, 0.95);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: fade-in 0.3s ease;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  background: var(--bg-card);
  border: 1px solid var(--border-neon);
  border-radius: var(--radius-lg);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow: auto;
  position: relative;
  animation: scale-in 0.3s ease;
}

@keyframes scale-in {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  color: var(--text-primary);
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  transition: all var(--transition);
}

.modal-close:hover {
  background: var(--neon-cyan);
  color: var(--bg-deep);
}

.modal-image {
  height: 300px;
  overflow: hidden;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-info {
  padding: 32px;
}

.modal-title {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.modal-desc {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 24px;
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* 背景装饰 */
.projects-bg {
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

/* 响应式 */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .projects-section {
    padding: 80px 0;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-content {
    max-height: 80vh;
  }
  
  .modal-image {
    height: 200px;
  }
}
</style>
