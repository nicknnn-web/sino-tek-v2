<template>
  <section id="home" class="hero">
    <Swiper
      :modules="modules"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :effect="'fade'"
      :loop="true"
      class="hero-swiper"
    >
      <SwiperSlide v-for="(slide, i) in heroSlides" :key="i">
        <div
          class="slide"
          :style="{ backgroundImage: `url('/assets/img/hero/${slide.bg}')` }"
        >
          <div class="slide-overlay"></div>
          <div class="container slide-content">
            <div class="slide-badge">
              <span class="badge-dot"></span>
              {{ slide.sub }}
            </div>
            <h1 class="slide-title">
              <span v-for="(line, j) in slide.title.split('\n')" :key="j">
                {{ line }}<br v-if="j < slide.title.split('\n').length - 1" />
              </span>
            </h1>
            <p class="slide-desc">专注软件定制开发 20 年，服务金融、司法、医疗、教育等关键行业</p>
            <div class="slide-actions">
              <a href="#service" class="btn btn-white">{{ slide.btn }} ›</a>
              <a href="mailto:sunny.sun@sino-tek.com" class="btn btn-white-outline">发送邮件</a>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <div class="swiper-pagination"></div>
    </Swiper>

    <!-- 底部统计条 -->
    <div class="hero-bottom">
      <div class="container">
        <div class="hero-stats">
          <div class="hero-stat" v-for="s in stats" :key="s.label">
            <span class="stat-num">{{ s.num }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { heroSlides } from '../data/content.js'
import { stats } from '../data/content.js'

const modules = [Autoplay, EffectFade, Pagination]
</script>

<style scoped>
.hero { position: relative; overflow: hidden; }
.hero-swiper { height: 100vh; min-height: 680px; }
.slide {
  height: 100vh;
  min-height: 680px;
  background-size: cover;
  background-position: center;
  display: flex; align-items: center;
  position: relative;
}
.slide-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(0,60,130,0.82) 0%, rgba(0,102,204,0.6) 50%, rgba(0,120,60,0.3) 100%);
}
.slide-content { position: relative; z-index: 1; color: white; max-width: 700px; }
.slide-badge {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 13px; font-weight: 600; letter-spacing: 2px;
  color: rgba(255,255,255,0.85); margin-bottom: 24px; text-transform: uppercase;
}
.badge-dot {
  width: 8px; height: 8px; background: var(--green);
  border-radius: 50%; animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.85); }
}
.slide-title {
  font-size: clamp(32px, 5vw, 60px);
  font-weight: 700; line-height: 1.15;
  margin-bottom: 20px; letter-spacing: -1px;
}
.slide-desc {
  font-size: 17px; color: rgba(255,255,255,0.8);
  margin-bottom: 40px; max-width: 520px;
}
.slide-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.slide-actions .btn { padding: 16px 36px; font-size: 16px; }

:deep(.swiper-pagination) {
  position: absolute; bottom: 140px !important;
  left: 50% !important; transform: translateX(-50%);
  display: flex; gap: 8px;
}
:deep(.swiper-pagination-bullet) {
  width: 32px; height: 4px; background: rgba(255,255,255,0.4);
  border-radius: 2px; transition: all 0.3s; opacity: 1;
}
:deep(.swiper-pagination-bullet-active) { background: white; width: 48px; }

/* 底部统计 */
.hero-bottom {
  position: absolute; bottom: 0; left: 0; right: 0; z-index: 2;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255,255,255,0.5);
  padding: 24px 0;
}
.hero-stats { display: flex; justify-content: center; gap: 64px; }
.hero-stat { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.stat-num { font-size: 28px; font-weight: 700; color: var(--blue); line-height: 1; }
.stat-label { font-size: 13px; color: var(--text-muted); white-space: nowrap; }

@media (max-width: 768px) {
  .slide-actions { flex-direction: column; }
  .hero-stats { gap: 32px; flex-wrap: wrap; }
}
</style>
