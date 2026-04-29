<template>
  <section id="news" class="news-section">
    <div class="container">
      <!-- 标题 -->
      <div class="section-header">
        <div class="section-label">
          <span>新闻动态</span>
        </div>
        <h2 class="section-title">
          最新 <span class="text-gradient">资讯</span>
        </h2>
      </div>
      
      <!-- 新闻时间线 -->
      <div class="news-timeline">
        <div 
          class="news-item" 
          v-for="(item, index) in newsItems" 
          :key="index"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- 时间标记 -->
          <div class="news-date">
            <span class="date-month">{{ getMonth(item.date) }}</span>
            <span class="date-year">{{ getYear(item.date) }}</span>
          </div>
          
          <!-- 连接线 -->
          <div class="news-connector">
            <div class="connector-dot"></div>
            <div class="connector-line"></div>
          </div>
          
          <!-- 内容卡片 -->
          <div class="news-card cyber-card">
            <div class="news-image">
              <img :src="`/assets/img/news/${item.img}`" :alt="item.title" />
            </div>
            <div class="news-content">
              <h3 class="news-title">{{ item.title }}</h3>
              <span class="news-tag">新闻动态</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 合作伙伴滚动墙 -->
      <div class="partners-section">
        <h3 class="partners-title">
          <span class="text-gradient">合作伙伴</span>
        </h3>
        <div class="partners-marquee">
          <div class="partners-track">
            <div class="partner-item" v-for="(partner, index) in [...partners, ...partners]" :key="index">
              {{ partner }}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 背景装饰 -->
    <div class="news-bg">
      <div class="bg-grid"></div>
      <div class="bg-gradient"></div>
    </div>
  </section>
</template>

<script setup>
const newsItems = [
  {
    date: '2023年9月',
    img: 'new-01.jpg',
    title: '全面响应"互联网+科技服务"政策，支持科技企业、服务机构、政府部门等用户在移动应用、应用便利性、管理科学化等方面的服务需求'
  },
  {
    date: '2022年5月',
    img: 'new-02.jpg',
    title: '铁路局小程序全部功能已开发完成，并且已于2021年7月底正式上线运行。'
  }
]

const partners = [
  '人民银行', '交通银行', '农业银行',
  '新疆中保司法鉴定中心', '广西融安司法鉴定中心',
  '中国汽车技术研究中心', '中国汽车工业工程有限公司',
  '天津市科技局', '天津市科学技术信息研究所',
  '新疆农产建设兵团', '天津市水务局',
  '天津市高新技术成果转化中心', '天津市稀贵金属及合金产业中心',
  '天津卖买卖工业联盟', '铁道部第一设计院',
  'Vishay通用半导体', 'Danaher—Setra传感控制',
  '天津医科大学总医院', '天津市第一中心医院',
  '天津踝科医院', '天津市教育科学院附属医院'
]

const getMonth = (date) => {
  const match = date.match(/(\d+)月/)
  return match ? match[1] + '月' : date
}

const getYear = (date) => {
  const match = date.match(/(\d+)年/)
  return match ? match[1] : ''
}
</script>

<style scoped>
.news-section {
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
}

/* 新闻时间线 */
.news-timeline {
  max-width: 900px;
  margin: 0 auto 100px;
}

.news-item {
  display: flex;
  gap: 32px;
  margin-bottom: 48px;
  animation: fade-in-up 0.6s ease-out backwards;
}

/* 时间标记 */
.news-date {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 80px;
  padding-top: 8px;
}

.date-month {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 700;
  color: var(--neon-cyan);
  text-shadow: var(--glow-cyan);
}

.date-year {
  font-family: var(--font-display);
  font-size: 14px;
  color: var(--text-muted);
  letter-spacing: 2px;
}

/* 连接线 */
.news-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 40px;
}

.connector-dot {
  width: 12px;
  height: 12px;
  background: var(--neon-cyan);
  border-radius: 50%;
  box-shadow: var(--glow-cyan);
}

.connector-line {
  width: 2px;
  flex: 1;
  background: linear-gradient(180deg, var(--neon-cyan), transparent);
  margin-top: 8px;
}

.news-item:last-child .connector-line {
  display: none;
}

/* 新闻卡片 */
.news-card {
  flex: 1;
  display: flex;
  gap: 24px;
  padding: 24px;
}

.news-image {
  width: 200px;
  height: 140px;
  border-radius: var(--radius);
  overflow: hidden;
  flex-shrink: 0;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.news-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  line-height: 1.6;
  margin-bottom: 16px;
}

.news-tag {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(0, 136, 255, 0.05);
  border: 1px solid var(--border-neon);
  border-radius: var(--radius-sm);
  font-size: 11px;
  color: var(--neon-cyan);
  letter-spacing: 0.5px;
  width: fit-content;
}

/* 合作伙伴 */
.partners-section {
  margin-top: 80px;
}

.partners-title {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 48px;
}

.partners-marquee {
  overflow: hidden;
  position: relative;
}

.partners-marquee::before,
.partners-marquee::after {
  content: '';
  position: absolute;
  top: 0;
  width: 100px;
  height: 100%;
  z-index: 2;
}

.partners-marquee::before {
  left: 0;
  background: linear-gradient(90deg, var(--bg-dark), transparent);
}

.partners-marquee::after {
  right: 0;
  background: linear-gradient(90deg, transparent, var(--bg-dark));
}

.partners-track {
  display: flex;
  gap: 48px;
  animation: marquee 30s linear infinite;
}

.partner-item {
  flex-shrink: 0;
  padding: 12px 24px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  font-size: 14px;
  color: var(--text-secondary);
  white-space: nowrap;
  transition: all var(--transition);
}

.partner-item:hover {
  border-color: var(--border-neon);
  color: var(--neon-cyan);
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* 背景装饰 */
.news-bg {
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
  bottom: 0;
  left: 0;
  right: 0;
  height: 400px;
  background: linear-gradient(0deg, var(--bg-deep), transparent);
}

/* 响应式 */
@media (max-width: 768px) {
  .news-section {
    padding: 80px 0;
  }
  
  .news-item {
    flex-direction: column;
    gap: 16px;
  }
  
  .news-date {
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
  
  .news-connector {
    display: none;
  }
  
  .news-card {
    flex-direction: column;
  }
  
  .news-image {
    width: 100%;
    height: 180px;
  }
}
</style>
