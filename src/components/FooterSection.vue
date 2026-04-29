<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="container footer-grid">
        <!-- Logo + 邮箱 -->
        <div class="footer-brand">
          <div class="footer-logo">
            <img :src="logoUrl" alt="SINO-TEK" @error="e => e.target.style.display='none'" />
            <span>{{ company.name }}</span>
          </div>
          <a :href="`mailto:${company.email}`" class="footer-email">{{ company.email }}</a>
        </div>

        <!-- 首页重点 -->
        <div class="footer-links">
          <h5>首页重点</h5>
          <ul>
            <li v-for="link in footerLinks" :key="link.href">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <!-- 地址 -->
        <div class="footer-addr">
          <h5>地址:</h5>
          <p>{{ company.address }}</p>
        </div>

        <!-- 电话 -->
        <div class="footer-phone">
          <h5>联系电话</h5>
          <a :href="`tel:${company.phone}`" class="phone-num">{{ company.phone }}</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>{{ company.copyright }}</p>
      </div>
    </div>
  </footer>

  <!-- 回到顶部 -->
  <button :class="['back-top', { show: showTop }]" @click="scrollTop" aria-label="回到顶部">↑</button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { company, footerLinks } from '../data/content.js'

const logoUrl = '/assets/img/logo/logo.png'

const showTop = ref(false)
function onScroll() { showTop.value = window.scrollY > 300 }
function scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.footer { background: #0d1b2e; color: rgba(255,255,255,0.85); }
.footer-main { padding: 60px 0 40px; }
.footer-grid { display: grid; grid-template-columns: 2fr 1.5fr 1.5fr 1.5fr; gap: 40px; }
.footer-logo { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
.footer-logo img { height: 40px; filter: brightness(10); }
.footer-logo span { font-weight: 600; font-size: 14px; }
.footer-email { color: rgba(255,255,255,0.6); font-size: 14px; transition: color 0.2s; }
.footer-email:hover { color: white; }
h5 { font-size: 15px; font-weight: 600; color: white; margin-bottom: 16px; }
.footer-links ul { display: flex; flex-direction: column; gap: 10px; }
.footer-links a { font-size: 14px; color: rgba(255,255,255,0.6); transition: color 0.2s; }
.footer-links a:hover { color: white; padding-left: 4px; }
.footer-addr p { font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.7; }
.phone-num { font-size: 22px; font-weight: 700; color: white; }
.footer-bottom {
  padding: 20px 0;
  border-top: 1px solid rgba(255,255,255,0.1);
  font-size: 13px;
  color: rgba(255,255,255,0.4);
}

.back-top {
  position: fixed;
  bottom: 32px; right: 32px;
  width: 48px; height: 48px;
  background: var(--primary);
  color: white;
  border: none; border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  box-shadow: var(--shadow-lg);
  opacity: 0;
  transform: translateY(16px);
  transition: var(--transition);
  z-index: 999;
}
.back-top.show { opacity: 1; transform: translateY(0); }
.back-top:hover { background: var(--primary-dark); transform: translateY(-2px); }

@media (max-width: 900px) {
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 480px) {
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
