<template>
  <header :class="['navbar', { scrolled: isScrolled }]">
    <div class="container nav-inner">
      <a href="#home" class="nav-logo">
        <img :src="logoUrl" alt="SINO-TEK" class="nav-logo-img" @error="hideImg" />
        <div class="nav-brand">
          <span class="brand-name">SINO-TEK</span>
          <span class="brand-sub">飞鹏盛元</span>
        </div>
      </a>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <a
          v-for="item in nav"
          :key="item.href"
          :href="item.href"
          class="nav-link"
          @click="menuOpen = false"
        >{{ item.label }}</a>
        <a href="mailto:sunny.sun@sino-tek.com" class="nav-cta btn btn-primary">
          联系我们
        </a>
      </nav>

      <button class="nav-hamburger" @click="menuOpen = !menuOpen" :aria-label="menuOpen ? '关闭菜单' : '打开菜单'">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { nav } from '../data/content.js'

const logoUrl = '/assets/img/logo/logo.png'
const menuOpen = ref(false)
const isScrolled = ref(false)

function hideImg(e) { e.target.style.display = 'none' }

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.3s ease;
}
.navbar.scrolled {
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 2px 20px rgba(0,0,0,0.08);
  padding: 12px 0;
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}
.nav-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}
.nav-logo-img {
  width: 36px;
  height: 36px;
  object-fit: contain;
  border-radius: 8px;
}
.nav-brand {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}
.brand-name {
  font-size: 15px;
  font-weight: 700;
  color: var(--blue);
  letter-spacing: 1px;
}
.navbar:not(.scrolled) .brand-name { color: white; }
.brand-sub {
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 2px;
}
.navbar:not(.scrolled) .brand-sub { color: rgba(255,255,255,0.7); }

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}
.nav-link {
  padding: 8px 16px;
  font-size: 15px;
  font-weight: 500;
  color: rgba(255,255,255,0.9);
  border-radius: 50px;
  transition: all 0.2s ease;
}
.navbar.scrolled .nav-link { color: var(--text-muted); }
.nav-link:hover {
  background: rgba(255,255,255,0.15);
  color: white;
}
.navbar.scrolled .nav-link:hover {
  background: var(--blue-tint);
  color: var(--blue);
}
.nav-cta { padding: 10px 24px; font-size: 14px; }

.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.nav-hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}
.navbar.scrolled .nav-hamburger span { background: var(--text); }
.nav-hamburger span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-hamburger span.open:nth-child(2) { opacity: 0; }
.nav-hamburger span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 768px) {
  .nav-hamburger { display: flex; }
  .nav-links {
    position: fixed;
    top: 0; right: -100%;
    width: 280px;
    height: 100vh;
    background: white;
    flex-direction: column;
    align-items: flex-start;
    padding: 100px 32px 32px;
    gap: 4px;
    box-shadow: -8px 0 32px rgba(0,0,0,0.1);
    transition: right 0.3s ease;
  }
  .nav-links.open { right: 0; }
  .nav-link { color: var(--text) !important; font-size: 16px; width: 100%; }
  .nav-link:hover { background: var(--blue-tint) !important; color: var(--blue) !important; }
  .nav-cta { margin-top: 16px; width: 100%; justify-content: center; }
}
</style>
