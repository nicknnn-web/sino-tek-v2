<template>
  <!-- 粒子背景 -->
  <div id="particles-js"></div>
  
  <!-- 赛博朋克导航 -->
  <CyberNavBar />
  
  <!-- 主要内容 -->
  <main>
    <CyberHero />
    <CyberAbout />
    <CyberServices />
    <CyberProjects />
    <CyberStats />
    <CyberNews />
  </main>
  
  <!-- 页脚 -->
  <CyberFooter />
</template>

<script setup>
import { onMounted } from 'vue'

// 赛博朋克组件
import CyberNavBar from './components/CyberNavBar.vue'
import CyberHero from './components/CyberHero.vue'
import CyberAbout from './components/CyberAbout.vue'
import CyberServices from './components/CyberServices.vue'
import CyberProjects from './components/CyberProjects.vue'
import CyberStats from './components/CyberStats.vue'
import CyberNews from './components/CyberNews.vue'
import CyberFooter from './components/CyberFooter.vue'

onMounted(() => {
  // 初始化粒子背景
  if (window.particlesJS) {
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#00f5ff' },
        shape: { type: 'circle' },
        opacity: { value: 0.3, random: true },
        size: { value: 2, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#00f5ff',
          opacity: 0.1,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out'
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: false },
          resize: true
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 0.3 } }
        }
      },
      retina_detect: true
    })
  }
})
</script>

<style>
/* 引入赛博朋克主题样式 */
@import './assets/cyberpunk.css';

/* 页面过渡动画 */
main > * {
  opacity: 0;
  animation: section-fade-in 0.8s ease-out forwards;
}

main > *:nth-child(1) { animation-delay: 0.1s; }
main > *:nth-child(2) { animation-delay: 0.2s; }
main > *:nth-child(3) { animation-delay: 0.3s; }
main > *:nth-child(4) { animation-delay: 0.4s; }
main > *:nth-child(5) { animation-delay: 0.5s; }
main > *:nth-child(6) { animation-delay: 0.6s; }

@keyframes section-fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 粒子容器 */
#particles-js {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 选中文本 */
::selection {
  background: var(--neon-cyan);
  color: var(--bg-deep);
}
</style>
