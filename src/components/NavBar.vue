<template>
  <!-- 固定导航 -->
  <header :class="['navbar', { scrolled: isScrolled }]">
    <div class="container navbar-inner">
      <!-- Logo -->
      <a href="#home" class="logo">
        <img :src="logoUrl" alt="SINO-TEK" @error="hideImg" />
        <span class="logo-text">飞鹤盛元科技发展有限公司</span>
      </a>

      <!-- 桌面导航 -->
      <nav class="nav-links">
        <a v-for="item in nav" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>

      <!-- CTA -->
      <a href="#contact" class="theme-btn contact-btn">
        联系我们 <i class="arrow">›</i>
      </a>

      <!-- 移动菜单按钮 -->
      <button class="menu-toggle" @click="menuOpen = !menuOpen" aria-label="菜单">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>

    <!-- 移动导航 -->
    <div :class="['mobile-nav', { open: menuOpen }]">
      <a v-for="item in nav" :key="item.href" :href="item.href" @click="menuOpen = false">{{ item.label }}</a>
      <a href="#contact" class="theme-btn" @click="menuOpen = false">联系我们</a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { nav } from '../data/content.js'

const logoUrl = '/assets/img/logo/logo.png'

const isScrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 60
}
function hideImg(e) { e.target.style.display = 'none' }

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  transition: 0.3s ease;
  padding: 0;
}
.navbar-inner {
  display: flex;
  align-items: center;
  height: 72px;
  gap: 32px;
}
/* 未滚动：透明背景，白字 */
.logo { display: flex; align-items: center; gap: 12px; }
.logo img { height: 48px; object-fit: contain; }
.logo-text { color: white; font-weight: 600; font-size: 16px; white-space: nowrap; }
.nav-links { display: flex; gap: 8px; margin-left: auto; }
.nav-links a {
  padding: 8px 16px;
  color: white;
  font-weight: 500;
  border-radius: 6px;
  transition: 0.2s;
}
.nav-links a:hover { background: rgba(255,255,255,0.15); }
.contact-btn { padding: 10px 24px; font-size: 14px; margin-left: 8px; }
/* 滚动后：白底，深色字 */
.navbar.scrolled {
  background: rgba(255,255,255,0.97);
  box-shadow: 0 2px 20px rgba(0,0,0,0.1);
}
.navbar.scrolled .logo-text { color: var(--text); }
.navbar.scrolled .nav-links a { color: var(--text); }
.navbar.scrolled .nav-links a:hover { background: rgba(10,79,142,0.08); color: var(--primary); }

/* 移动端 */
.menu-toggle { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
.menu-toggle span { display: block; width: 24px; height: 2px; background: white; transition: 0.3s; border-radius: 2px; }
.navbar.scrolled .menu-toggle span { background: var(--text); }
.menu-toggle span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.menu-toggle span.open:nth-child(2) { opacity: 0; }
.menu-toggle span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
.mobile-nav {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 12px 20px 20px;
  background: white;
  border-top: 1px solid var(--border);
}
.mobile-nav.open { display: flex; }
.mobile-nav a { padding: 10px 12px; color: var(--text); border-radius: 6px; font-weight: 500; }
.mobile-nav a:hover { background: var(--bg-section); }
.mobile-nav .theme-btn { margin-top: 8px; justify-content: center; }

@media (max-width: 768px) {
  .nav-links, .contact-btn { display: none; }
  .menu-toggle { display: flex; margin-left: auto; }
  .logo-text { font-size: 13px; }
}
</style>
