<template>
  <section class="stats-section section-blue">
    <div class="container">
      <div class="stats-grid">
        <div
          v-for="(s, i) in stats"
          :key="s.label"
          class="stat-card"
          data-aos="fade-up"
          :data-aos-delay="i * 100"
        >
          <div class="stat-icon">{{ icons[i] }}</div>
          <div class="stat-num" :ref="el => counterRefs[i] = el">{{ s.num }}</div>
          <div class="stat-label">{{ s.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { stats } from '../data/content.js'
const icons = ['🌐', '🏆', '📈', '👨‍💻']
const counterRefs = ref([])
</script>

<style scoped>
.stats-section { padding: 80px 0; }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
.stat-card {
  text-align: center; padding: 40px 24px;
  background: rgba(255,255,255,0.08);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255,255,255,0.12);
  transition: all 0.3s ease;
}
.stat-card:hover {
  background: rgba(255,255,255,0.14);
  transform: translateY(-4px);
}
.stat-icon { font-size: 36px; margin-bottom: 16px; }
.stat-num {
  font-size: 48px; font-weight: 700; color: white;
  line-height: 1; margin-bottom: 8px;
}
.stat-label { font-size: 15px; color: rgba(255,255,255,0.75); }

@media (max-width: 768px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
