<template>
  <section class="features section-padding">
    <div class="container">
      <div class="features-grid">
        <div
          v-for="(f, i) in features"
          :key="i"
          :class="['feature-card', { active: f.active }]"
          data-aos="fade-up"
          :data-aos-delay="i * 150"
        >
          <div class="feature-icon">
            <img :src="`/assets/img/feature/${f.icon}`" :alt="f.title" @error="useFallbackIcon" />
          </div>
          <div class="feature-body">
            <span class="feature-tag">{{ f.tag }}</span>
            <h3>{{ f.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { features } from '../data/content.js'
function useFallbackIcon(e) {
  e.target.style.display = 'none'
}
</script>

<style scoped>
.features { background: white; padding: 60px 0; }
.features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.feature-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 28px 32px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  transition: var(--transition);
  background: white;
}
.feature-card:hover, .feature-card.active {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
.feature-icon { flex-shrink: 0; width: 56px; height: 56px; display: flex; align-items: center; justify-content: center; }
.feature-icon img { width: 48px; height: 48px; object-fit: contain; }
.feature-tag { font-size: 13px; color: var(--primary); font-weight: 600; letter-spacing: 1px; }
.feature-card.active .feature-tag, .feature-card:hover .feature-tag { color: rgba(255,255,255,0.8); }
.feature-body h3 { font-size: 18px; font-weight: 700; margin-top: 4px; }

@media (max-width: 768px) {
  .features-grid { grid-template-columns: 1fr; }
}
</style>
