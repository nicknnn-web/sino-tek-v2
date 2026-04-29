<template>
  <section id="project" class="projects section-padding section-bg">
    <div class="container">
      <div class="projects-top" data-aos="fade-up">
        <div class="section-label">研发成果</div>
        <h2>持续创新，提升用户体验</h2>
        <p>深耕行业 20 年，积累了大量成功案例和解决方案</p>
      </div>
    </div>

    <div class="projects-scroll">
      <div class="projects-track">
        <div
          v-for="(proj, i) in projects"
          :key="proj.id"
          class="project-card"
          data-aos="fade-up"
          :data-aos-delay="i * 80"
        >
          <div class="card-img">
            <img :src="'/assets/img/service/' + proj.img" :alt="proj.title" />
            <div class="card-overlay">
              <span class="card-num">0{{ proj.id }}</span>
            </div>
          </div>
          <div class="card-body">
            <div class="card-tag">案例</div>
            <h3>{{ proj.title }}</h3>
            <p>{{ proj.desc }}</p>
            <a href="#contact" class="card-link">
              了解更多 <span>›</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from '../data/content.js'
</script>

<style scoped>
.projects { overflow: hidden; }
.projects-top { max-width: 600px; margin-bottom: 48px; }
.projects-top h2 { font-size: clamp(26px, 3vw, 38px); margin-top: 8px; }
.projects-scroll { padding: 0 20px 32px; overflow-x: auto; scrollbar-width: thin; }
.projects-track { display: flex; gap: 24px; width: max-content; padding: 0 calc((100vw - 1200px) / 2); }
.project-card {
  width: 360px; flex-shrink: 0;
  background: white; border-radius: var(--radius-lg);
  overflow: hidden; box-shadow: var(--shadow);
  transition: all 0.3s ease;
}
.project-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-lg); }
.card-img {
  height: 220px; position: relative; overflow: hidden;
  background: var(--bg-section);
}
.card-img img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 0.4s ease;
}
.project-card:hover .card-img img { transform: scale(1.05); }
.card-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(0,102,204,0.4) 0%, rgba(0,170,85,0.4) 100%);
  display: flex; align-items: flex-end; padding: 20px;
}
.card-num {
  font-size: 48px; font-weight: 700; color: white;
  opacity: 0.6; line-height: 1;
}
.card-body { padding: 28px; }
.card-tag {
  font-size: 12px; font-weight: 600; color: var(--green);
  letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px;
}
.card-body h3 {
  font-size: 18px; font-weight: 700; margin-bottom: 10px;
  line-height: 1.4; white-space: pre-line;
}
.card-body p {
  font-size: 14px; color: var(--text-muted); line-height: 1.75;
  display: -webkit-box; -webkit-line-clamp: 3;
  -webkit-box-orient: vertical; overflow: hidden;
}
.card-link {
  display: inline-flex; align-items: center; gap: 4px;
  margin-top: 16px; font-size: 14px; font-weight: 600;
  color: var(--blue); transition: gap 0.2s;
}
.card-link:hover { gap: 8px; }

@media (max-width: 768px) {
  .projects-track { padding: 0 20px; }
}
</style>
