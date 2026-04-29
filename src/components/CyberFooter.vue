<template>
  <footer id="contact" class="footer-section">
    <div class="container">
      <!-- 联系信息 -->
      <div class="footer-content">
        <div class="footer-brand">
          <h2 class="footer-logo glitch" data-text="SINO-TEK">SINO-TEK</h2>
          <p class="footer-tagline">飞鹏盛元科技 · 专业软件定制解决方案</p>
          <p class="footer-desc">
            专注软件定制开发 20 年，服务金融、司法、医疗、教育等关键行业
          </p>
        </div>
        
        <div class="footer-links">
          <div class="footer-column">
            <h3 class="column-title">快速链接</h3>
            <ul class="column-list">
              <li><a href="#about">关于我们</a></li>
              <li><a href="#services">核心业务</a></li>
              <li><a href="#projects">项目案例</a></li>
              <li><a href="#news">新闻动态</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3 class="column-title">联系方式</h3>
            <ul class="column-list">
              <li>
                <img src="/assets/img/icon-email.png" alt="邮箱" class="contact-icon-img">
                <span>{{ company.email }}</span>
              </li>
              <li>
                <img src="/assets/img/icon-phone.png" alt="电话" class="contact-icon-img">
                <span>{{ company.phone }}</span>
              </li>
              <li>
                <img src="/assets/img/icon-location.png" alt="地址" class="contact-icon-img">
                <span>{{ company.address }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- 底部栏 -->
      <div class="footer-bottom">
        <div class="footer-copyright">
          {{ company.copyright }}
        </div>
        <div class="footer-meta">
          <span>津ICP备XXXXXXXX号</span>
          <span class="separator">|</span>
          <span>技术支持：飞鹏盛元科技</span>
        </div>
      </div>
    </div>
    
    <!-- 背景装饰 -->
    <div class="footer-bg">
      <div class="bg-gradient"></div>
      <div class="bg-grid"></div>
      <div class="bg-line"></div>
    </div>
  </footer>
</template>

<script setup>
import { company } from '../data/content.js'
</script>

<style scoped>
.footer-section {
  position: relative;
  padding: 100px 0 40px;
  background: var(--bg-deep);
  overflow: hidden;
}

/* 内容区 */
.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-bottom: 60px;
  position: relative;
  z-index: 2;
}

/* 品牌区 */
.footer-brand {
  max-width: 400px;
}

.footer-logo {
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 700;
  color: var(--neon-cyan);
  text-shadow: 0 0 20px var(--neon-cyan);
  margin-bottom: 16px;
  letter-spacing: 4px;
}

.footer-tagline {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 12px;
  letter-spacing: 1px;
}

.footer-desc {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
}

/* 链接区 */
.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
}

.column-title {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 600;
  color: var(--neon-cyan);
  letter-spacing: 2px;
  margin-bottom: 24px;
  text-transform: uppercase;
}

.column-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.column-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;
  color: var(--text-secondary);
}

.column-list a {
  color: var(--text-secondary);
  transition: all var(--transition);
}

.column-list a:hover {
  color: var(--neon-cyan);
  text-shadow: 0 0 10px var(--neon-cyan);
}

.contact-icon {
  flex-shrink: 0;
}

.contact-icon-img {
  width: 28px;
  height: 28px;
  margin-right: 12px;
  flex-shrink: 0;
  vertical-align: middle;
}

/* 底部栏 */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  border-top: 1px solid var(--border-color);
  position: relative;
  z-index: 2;
}

.footer-copyright {
  font-size: 12px;
  color: var(--text-muted);
}

.footer-meta {
  display: flex;
  gap: 16px;
  font-size: 12px;
  color: var(--text-muted);
}

.separator {
  color: var(--border-color);
}

/* 背景装饰 */
.footer-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(180deg, var(--bg-dark), transparent);
}

.bg-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(0, 136, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 136, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
}

.bg-line {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-neon), transparent);
  opacity: 0.3;
}

/* 响应式 */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  
  .footer-brand {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .footer-section {
    padding: 60px 0 24px;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
  
  .footer-meta {
    flex-direction: column;
    gap: 8px;
  }
  
  .separator {
    display: none;
  }
}
</style>
