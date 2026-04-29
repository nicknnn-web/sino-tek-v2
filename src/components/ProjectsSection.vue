<template>
  <section id="project" class="projects section-padding section-bg">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <div class="section-title">
          <span class="tag">研发成果</span>
          <h2>持续创新提升用户体验</h2>
        </div>
        <a href="#project" class="theme-btn outline">查看项目 ›</a>
      </div>
    </div>

    <!-- 横向滚动卡片 -->
    <div class="projects-scroll">
      <div class="projects-track">
        <div
          v-for="(proj, i) in projects"
          :key="proj.id"
          class="project-card"
          data-aos="fade-up"
          :data-aos-delay="i * 80"
          @mouseenter="hovered = i"
          @mouseleave="hovered = null"
        >
          <div
            class="card-img"
            :style="{ backgroundImage: `url('/assets/img/service/${proj.img}')` }"
          >
            <a href="#project" class="card-arrow">→</a>
          </div>
          <div class="card-body">
            <div class="card-icon">◈</div>
            <h3>{{ proj.title }}</h3>
            <p>{{ proj.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { projects } from '../data/content.js'
const hovered = ref(null)
</script>

<style scoped>
.projects { overflow: hidden; }
.section-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 48px; }
.section-header .section-title { margin-bottom: 0; }
.projects-scroll { padding: 0 20px 20px; overflow-x: auto; scrollbar-width: thin; }
.projects-track { display: flex; gap: 24px; width: max-content; padding: 0 calc((100vw - 1200px) / 2); }
.project-card {
  width: 320px;
  flex-shrink: 0;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
}
.project-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
.card-img {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: var(--bg-section);
}
.card-arrow {
  position: absolute;
  bottom: 16px; right: 16px;
  width: 40px; height: 40px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px;
  opacity: 0;
  transform: scale(0.8);
  transition: var(--transition);
}
.project-card:hover .card-arrow { opacity: 1; transform: scale(1); }
.card-body { padding: 24px; }
.card-icon { font-size: 24px; color: var(--primary); margin-bottom: 12px; }
.card-body h3 { font-size: 18px; font-weight: 700; margin-bottom: 12px; line-height: 1.4; white-space: pre-line; }
.card-body p { font-size: 14px; color: var(--text-muted); line-height: 1.7; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }

@media (max-width: 768px) {
  .section-header { flex-direction: column; align-items: flex-start; gap: 16px; }
  .projects-track { padding: 0 20px; }
}
</style>
