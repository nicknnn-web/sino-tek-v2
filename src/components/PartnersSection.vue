<template>
  <section class="partners section-blue">
    <div class="container partners-header">
      <span class="section-label" style="color: rgba(255,255,255,0.7)">合作客户</span>
      <p class="partners-sub">已服务超过 35 家企业和机构，覆盖金融、司法、医疗、教育等关键领域</p>
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
.partners { padding: 56px 0; }
.partners-header { text-align: center; margin-bottom: 40px; }
.partners-header .section-label::before { background: var(--green); }
.partners-sub { color: rgba(255,255,255,0.7); font-size: 16px; margin-top: 8px; }
.marquee-wrap { overflow: hidden; }
.marquee-track {
  display: flex; gap: 0; width: max-content;
  animation: marquee 50s linear infinite;
}
.marquee-track:hover { animation-play-state: paused; }
.partner-item {
  white-space: nowrap; padding: 12px 36px;
  font-size: 15px; color: rgba(255,255,255,0.75);
  border-right: 1px solid rgba(255,255,255,0.15);
  transition: all 0.2s;
}
.partner-item:hover { color: white; background: rgba(255,255,255,0.1); }
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
