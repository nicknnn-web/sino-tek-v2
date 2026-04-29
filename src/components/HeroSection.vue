<template>
  <section id="home" class="hero">
    <Swiper
      :modules="modules"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :effect="'fade'"
      :loop="true"
      class="hero-swiper"
      @swiper="onSwiper"
    >
      <SwiperSlide v-for="(slide, i) in heroSlides" :key="i">
        <div
          class="slide"
          :style="{ backgroundImage: `url('/assets/img/hero/${slide.bg}')` }"
        >
          <div class="slide-overlay"></div>
          <div class="container slide-content">
            <p class="slide-sub" data-aos="fade-right" data-aos-delay="200">{{ slide.sub }}</p>
            <h1 class="slide-title" data-aos="fade-right" data-aos-delay="400">
              <span v-for="(line, j) in slide.title.split('\n')" :key="j">
                {{ line }}<br v-if="j < slide.title.split('\n').length - 1" />
              </span>
            </h1>
            <a href="#service" class="theme-btn white" data-aos="fade-right" data-aos-delay="600">
              {{ slide.btn }} ›
            </a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { heroSlides } from '../data/content.js'

const modules = [Autoplay, EffectFade]
function onSwiper(sw) { /* swiper 实例 */ }
</script>

<style scoped>
.hero { height: 100vh; min-height: 600px; position: relative; }
.hero-swiper { height: 100%; }
.slide {
  height: 100vh;
  min-height: 600px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  position: relative;
}
.slide-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(5,30,60,0.75) 0%, rgba(10,79,142,0.55) 100%);
}
.slide-content { position: relative; z-index: 1; color: white; max-width: 700px; }
.slide-sub {
  font-size: 16px;
  font-weight: 500;
  color: rgba(255,255,255,0.85);
  letter-spacing: 2px;
  margin-bottom: 20px;
  text-transform: uppercase;
}
.slide-title {
  font-size: clamp(28px, 4vw, 52px);
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 36px;
}
.theme-btn.white { font-size: 16px; padding: 16px 40px; }
</style>
