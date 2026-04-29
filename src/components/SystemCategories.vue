<template>
  <section class="system-cats section-padding">
    <div class="container">
      <div class="cats-grid">
        <div
          v-for="(cat, i) in systemCategories"
          :key="i"
          :class="['cat-card', { active: cat.active }]"
          data-aos="fade-up"
          :data-aos-delay="i * 120"
        >
          <div class="cat-icon">
            <!-- 用 emoji 替代 flaticon，避免字体依赖 -->
            <span>{{ icons[i] }}</span>
          </div>
          <h3>{{ cat.title }}</h3>
          <p>{{ cat.desc }}</p>
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
.cats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.cat-card {
  padding: 40px 32px;
  border-radius: 12px;
  border: 1px solid var(--border);
  transition: var(--transition);
  text-align: center;
}
.cat-card:hover, .cat-card.active {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
.cat-icon { font-size: 48px; margin-bottom: 20px; }
.cat-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 12px; }
.cat-card p { font-size: 14px; line-height: 1.8; color: var(--text-muted); }
.cat-card.active p, .cat-card:hover p { color: rgba(255,255,255,0.85); }

@media (max-width: 768px) {
  .cats-grid { grid-template-columns: 1fr; }
}
</style>
