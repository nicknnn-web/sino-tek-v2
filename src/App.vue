<template>
  <NavBar />
  <HeroSection />
  <FeatureSection />
  <ServiceIntro />
  <PartnersSection />
  <ProjectsSection />
  <SystemCategories />
  <OrgStructure />
  <DevProcess />
  <StatsSection />
  <NewsSection />
  <FooterSection />
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import FeatureSection from './components/FeatureSection.vue'
import ServiceIntro from './components/ServiceIntro.vue'
import PartnersSection from './components/PartnersSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SystemCategories from './components/SystemCategories.vue'
import OrgStructure from './components/OrgStructure.vue'
import DevProcess from './components/DevProcess.vue'
import StatsSection from './components/StatsSection.vue'
import NewsSection from './components/NewsSection.vue'
import FooterSection from './components/FooterSection.vue'

onMounted(() => {
  AOS.init({ duration: 700, once: true, offset: 80 })
})
</script>

<style>
@import './assets/main.css';
</style>
