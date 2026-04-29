<template>
  <!-- 赛博朋克侧边导航 -->
  <nav class="cyber-nav">
    <!-- Logo -->
    <div class="nav-logo">
      <span class="logo-text glitch" data-text="SINO-TEK">SINO-TEK</span>
      <span class="logo-sub">飞鹏盛元</span>
    </div>
    
    <!-- 导航链接 -->
    <div class="nav-links">
      <a 
        v-for="(item, index) in navItems" 
        :key="item.id"
        :href="item.href"
        class="nav-link"
        :class="{ active: activeSection === item.id }"
        @click="scrollToSection(item.id)"
      >
        <span class="nav-indicator"></span>
        <span class="nav-label">{{ item.label }}</span>
        <span class="nav-number">{{ String(index + 1).padStart(2, '0') }}</span>
      </a>
    </div>
    
    <!-- 主题切换 -->
    <button class="theme-toggle" @click="toggleTheme" :title="isDark ? '切换浅色模式' : '切换深色模式'">
      <svg v-if="isDark" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
      </svg>
      <svg v-else viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
      </svg>
    </button>
    
    <!-- 状态指示器 -->
    <div class="nav-status">
      <div class="status-dot"></div>
      <span>SYSTEM ONLINE</span>
    </div>
  </nav>
  
  <!-- 移动端汉堡菜单 -->
  <button class="mobile-menu-toggle" @click="mobileMenuOpen = !mobileMenuOpen">
    <span></span>
    <span></span>
    <span></span>
  </button>
  
  <!-- 移动端菜单 -->
  <div class="mobile-menu" :class="{ open: mobileMenuOpen }">
    <div class="mobile-menu-content">
      <a 
        v-for="(item, index) in navItems" 
        :key="item.id"
        :href="item.href"
        class="mobile-nav-link"
        @click="mobileMenuOpen = false; scrollToSection(item.id)"
      >
        <span class="mobile-nav-number">{{ String(index + 1).padStart(2, '0') }}</span>
        <span class="mobile-nav-label">{{ item.label }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { id: 'hero', label: '首页', href: '#hero' },
  { id: 'about', label: '关于我们', href: '#about' },
  { id: 'services', label: '核心业务', href: '#services' },
  { id: 'projects', label: '项目案例', href: '#projects' },
  { id: 'stats', label: '技术实力', href: '#stats' },
  { id: 'news', label: '新闻动态', href: '#news' },
  { id: 'contact', label: '联系我们', href: '#contact' },
]

const activeSection = ref('hero')
const isDark = ref(true)
const mobileMenuOpen = ref(false)

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}

// 监听滚动更新当前激活的导航项
const handleScroll = () => {
  const sections = navItems.map(item => ({
    id: item.id,
    el: document.getElementById(item.id)
  }))
  
  const scrollY = window.scrollY + window.innerHeight / 3
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section.el && section.el.offsetTop <= scrollY) {
      activeSection.value = section.id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.cyber-nav {
  position: fixed;
  left: 32px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 24px;
  pointer-events: auto;
}

/* Logo */
.nav-logo {
  position: absolute;
  top: -120px;
  left: 0;
}

.logo-text {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 3px;
  color: var(--neon-cyan);
  text-shadow: 0 0 10px var(--neon-cyan);
  display: block;
}

.logo-sub {
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 2px;
  margin-top: 4px;
  display: block;
}

/* 导航链接 */
.nav-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.nav-link {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  cursor: pointer;
  transition: all var(--transition);
}

.nav-indicator {
  width: 8px;
  height: 8px;
  border: 2px solid var(--text-muted);
  border-radius: 50%;
  transition: all var(--transition);
}

.nav-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  letter-spacing: 1px;
  opacity: 0;
  transform: translateX(-10px);
  transition: all var(--transition);
  white-space: nowrap;
}

.nav-number {
  position: absolute;
  left: 24px;
  font-family: var(--font-display);
  font-size: 10px;
  color: var(--text-muted);
  opacity: 0;
  transition: all var(--transition);
}

/* Hover 状态 */
.nav-link:hover .nav-indicator {
  border-color: var(--neon-cyan);
  box-shadow: 0 0 10px var(--neon-cyan);
}

.nav-link:hover .nav-label {
  opacity: 1;
  transform: translateX(0);
  color: var(--neon-cyan);
}

.nav-link:hover .nav-number {
  opacity: 0.5;
}

/* Active 状态 */
.nav-link.active .nav-indicator {
  background: var(--neon-cyan);
  border-color: var(--neon-cyan);
  box-shadow: 0 0 15px var(--neon-cyan);
}

.nav-link.active .nav-label {
  opacity: 1;
  transform: translateX(0);
  color: var(--neon-cyan);
}

/* 主题切换按钮 */
.theme-toggle {
  margin-top: 24px;
  width: 40px;
  height: 40px;
  background: var(--bg-card);
  border: 1px solid var(--border-neon);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition);
}

.theme-toggle:hover {
  box-shadow: var(--glow-cyan);
  transform: rotate(180deg);
}

.theme-toggle svg {
  width: 18px;
  height: 18px;
  fill: var(--neon-cyan);
}

/* 状态指示器 */
.nav-status {
  position: absolute;
  bottom: -60px;
  left: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-size: 9px;
  letter-spacing: 1px;
  color: var(--text-muted);
}

.status-dot {
  width: 6px;
  height: 6px;
  background: var(--neon-green);
  border-radius: 50%;
  animation: pulse-neon 2s ease-in-out infinite;
}

/* 移动端菜单 */
.mobile-menu-toggle {
  display: none;
  position: fixed;
  top: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  background: var(--bg-card);
  border: 1px solid var(--border-neon);
  border-radius: var(--radius);
  cursor: pointer;
  z-index: 200;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all var(--transition);
}

.mobile-menu-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--neon-cyan);
  transition: all var(--transition);
}

.mobile-menu {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 15, 0.95);
  z-index: 150;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition);
}

.mobile-menu.open {
  opacity: 1;
  pointer-events: auto;
}

.mobile-menu-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: var(--font-display);
  font-size: 24px;
  color: var(--text-primary);
  transition: all var(--transition);
}

.mobile-nav-link:hover {
  color: var(--neon-cyan);
  text-shadow: 0 0 20px var(--neon-cyan);
}

.mobile-nav-number {
  font-size: 14px;
  color: var(--neon-cyan);
  opacity: 0.5;
}

/* 响应式 */
@media (max-width: 1024px) {
  .cyber-nav {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .mobile-menu {
    display: block;
  }
}
</style>
