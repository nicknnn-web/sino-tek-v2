<template>
  <section class="partners section-bg" style="padding: 40px 0;">
    <div class="container">
      <h6 class="partners-title" data-aos="fade-up">35+ 合作企业及机构</h6>
    </div>
    <div class="marquee-wrap">
      <div class="marquee-track">
        <span v-for="(p, i) in [...partners, ...partners]" :key="i" class="partner-item">{{ p }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { partners } from '../data/content.js'
</script>

<style scoped>
.partners-title {
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 28px;
}
.marquee-wrap { overflow: hidden; padding: 8px 0; }
.marquee-track {
  display: flex;
  gap: 0;
  animation: marquee 40s linear infinite;
  width: max-content;
}
.marquee-track:hover { animation-play-state: paused; }
.partner-item {
  white-space: nowrap;
  padding: 8px 32px;
  font-size: 15px;
  color: var(--text-muted);
  border-right: 1px solid var(--border);
  transition: color 0.2s;
}
.partner-item:hover { color: var(--primary); }

@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
