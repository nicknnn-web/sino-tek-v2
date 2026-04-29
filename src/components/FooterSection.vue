<template>
  <footer class="footer">
    <!-- 主页脚 -->
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <!-- 品牌 -->
          <div class="footer-brand">
            <div class="footer-logo">
              <img :src="logoUrl" alt="SINO-TEK" @error="e => e.target.style.display='none'" />
              <span class="brand-text">{{ company.name }}</span>
            </div>
            <p class="footer-desc">
              天津飞鹤盛元科技发展有限公司，专注软件定制开发 20 年，为金融、司法、医疗、教育等行业提供专业的技术解决方案。
            </p>
            <div class="footer-contact">
              <a :href="'mailto:' + company.email" class="contact-item">
                <span class="contact-icon">✉</span>
                {{ company.email }}
              </a>
              <a :href="'tel:' + company.phone" class="contact-item">
                <span class="contact-icon">☎</span>
                {{ company.phone }}
              </a>
            </div>
          </div>

          <!-- 快速链接 -->
          <div class="footer-links-col">
            <h5>快速链接</h5>
            <ul>
              <li v-for="link in footerLinks" :key="link.href">
                <a :href="link.href">{{ link.label }}</a>
              </li>
            </ul>
          </div>

          <!-- 联系我们 -->
          <div class="footer-links-col">
            <h5>联系方式</h5>
            <div class="contact-detail">
              <p class="contact-address">
                <span class="contact-icon">📍</span>
                {{ company.address }}
              </p>
            </div>
            <div class="footer-cta">
              <a href="mailto:sunny.sun@sino-tek.com" class="btn btn-green">发送邮件咨询 ›</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部条 -->
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p class="copyright">{{ company.copyright }}</p>
        <p class="footer-mark">
          <span class="mark-blue">SINO</span><span class="mark-green">-TEK</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { company, footerLinks } from '../data/content.js'
const logoUrl = '/assets/img/logo/logo.png'
</script>

<style scoped>
.footer { background: #0B1929; color: rgba(255,255,255,0.75); }
.footer-main { padding: 80px 0 60px; }
.footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 64px; }

/* 品牌 */
.footer-logo { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
.footer-logo img { width: 40px; height: 40px; object-fit: contain; border-radius: 8px; }
.brand-text { font-size: 16px; font-weight: 700; color: white; }
.footer-desc { font-size: 14px; line-height: 1.8; margin-bottom: 24px; max-width: 340px; }
.footer-contact { display: flex; flex-direction: column; gap: 10px; }
.contact-item {
  display: flex; align-items: center; gap: 10px;
  font-size: 14px; color: rgba(255,255,255,0.65);
  transition: color 0.2s;
}
.contact-item:hover { color: white; }
.contact-icon { font-size: 16px; }

/* 链接列 */
.footer-links-col h5 {
  font-size: 15px; font-weight: 700; color: white;
  margin-bottom: 20px; padding-bottom: 12px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.footer-links-col ul { display: flex; flex-direction: column; gap: 10px; }
.footer-links-col li a {
  font-size: 14px; color: rgba(255,255,255,0.6);
  transition: color 0.2s;
}
.footer-links-col li a:hover { color: var(--green); }

/* 联系详情 */
.contact-address {
  display: flex; align-items: flex-start; gap: 10px;
  font-size: 14px; line-height: 1.7; margin-bottom: 24px;
}
.contact-icon { font-size: 16px; margin-top: 2px; }

/* 底部 */
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 24px 0;
}
.footer-bottom-inner { display: flex; justify-content: space-between; align-items: center; }
.copyright { font-size: 13px; color: rgba(255,255,255,0.4); }
.footer-mark { font-size: 18px; font-weight: 700; letter-spacing: 2px; }
.mark-blue { color: var(--blue-light); }
.mark-green { color: var(--green); }

@media (max-width: 768px) {
  .footer-grid { grid-template-columns: 1fr; gap: 40px; }
  .footer-bottom-inner { flex-direction: column; gap: 8px; text-align: center; }
}
</style>
