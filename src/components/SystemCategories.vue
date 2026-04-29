<template>
  <section class="system-cats section-padding">
    <div class="container">
      <div class="cats-top" data-aos="fade-up">
        <div class="section-label">产品体系</div>
        <h2>覆盖全场景的技术能力</h2>
      </div>
      <div class="cats-grid">
        <div
          v-for="(cat, i) in systemCategories"
          :key="i"
          :class="['cat-card', cat.active ? 'active-green' : 'active-blue']"
          data-aos="fade-up"
          :data-aos-delay="i * 120"
        >
          <div class="cat-icon">
            <span>{{ icons[i] }}</span>
          </div>
          <h3>{{ cat.title }}</h3>
          <p>{{ cat.desc }}</p>
          <div class="cat-bar"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { systemCategories } from '../data/content.js'
const icons = ['🖥️', '☁️', '📱']
</script>

<style scoped>
.system-cats { background: white; }
.cats-top { max-width: 600px; margin-bottom: 48px; }
.cats-top h2 { font-size: clamp(26px, 3vw, 38px); margin-top: 8px; }
.cats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.cat-card {
  padding: 40px 36px; border-radius: var(--radius-lg);
  border: 1.5px solid var(--border);
  background: white; position: relative;
  overflow: hidden; transition: all 0.3s ease;
}
.cat-card::after {
  content: ''; position: absolute;
  bottom: 0; left: 0; right: 0; height: 4px;
  transition: all 0.3s ease;
}
.cat-card.active-blue::after { background: var(--blue); }
.cat-card.active-green::after { background: var(--green); }
.cat-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: transparent; }

.cat-icon { font-size: 48px; margin-bottom: 20px; }
.cat-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 12px; }
.cat-card p { font-size: 14px; line-height: 1.8; color: var(--text-muted); }
.cat-bar { display: none; }

@media (max-width: 768px) {
  .cats-grid { grid-template-columns: 1fr; }
}
</style>
