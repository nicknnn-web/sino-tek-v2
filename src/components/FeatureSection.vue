<template>
  <section class="features section-padding">
    <div class="container">
      <div class="features-grid">
        <div
          v-for="(f, i) in features"
          :key="i"
          :class="['feature-card', { blue: i % 2 === 0, green: i % 2 !== 0 }]"
          data-aos="fade-up"
          :data-aos-delay="i * 100"
        >
          <div class="feature-icon">
            <img :src="'/assets/img/feature/' + f.icon" :alt="f.title" @error="useFallbackIcon" />
          </div>
          <div class="feature-body">
            <span class="feature-tag">{{ f.tag }}</span>
            <h3>{{ f.title }}</h3>
          </div>
          <div class="feature-arrow">›</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { features } from '../data/content.js'
function useFallbackIcon(e) { e.target.style.display = 'none' }
</script>

<style scoped>
.features { background: var(--bg-section); }
.features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.feature-card {
  display: flex; align-items: center; gap: 20px;
  padding: 28px 32px; border-radius: var(--radius);
  border: 1px solid var(--border);
  background: white; cursor: pointer;
  transition: all 0.3s ease;
  position: relative; overflow: hidden;
}
.feature-card::before {
  content: ''; position: absolute;
  top: 0; left: 0; right: 0; height: 3px;
  transform: scaleX(0); transition: transform 0.3s ease;
}
.feature-card.blue::before { background: var(--blue); }
.feature-card.green::before { background: var(--green); }
.feature-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: transparent; }
.feature-card:hover::before { transform: scaleX(1); }

.feature-icon { flex-shrink: 0; width: 52px; height: 52px; }
.feature-icon img { width: 100%; height: 100%; object-fit: contain; }
.feature-body { flex: 1; }
.feature-tag {
  font-size: 12px; font-weight: 600; letter-spacing: 1px;
  color: var(--text-muted); text-transform: uppercase;
  display: block; margin-bottom: 4px;
}
.feature-card.blue:hover .feature-tag { color: var(--blue); }
.feature-card.green:hover .feature-tag { color: var(--green); }
.feature-body h3 { font-size: 17px; font-weight: 700; }
.feature-arrow {
  font-size: 24px; color: var(--border);
  transition: all 0.3s ease; font-weight: 300;
}
.feature-card:hover .feature-arrow {
  color: var(--blue);
  transform: translateX(4px);
}
.feature-card.green:hover .feature-arrow { color: var(--green); }

@media (max-width: 768px) {
  .features-grid { grid-template-columns: 1fr; }
}
</style>
