<template>
  <section id="service" class="service-intro section-padding">
    <div class="container">
      <div class="service-grid">
        <!-- 左侧图片 + 数字 -->
        <div class="service-image-wrap" data-aos="fade-right">
          <img :src="'/assets/img/feature/trusted-1.jpg'" alt="服务" class="service-img" />
          <div class="stats-badge">
            <div v-for="s in serviceIntro.stats" :key="s.label" class="stat-item">
              <div class="stat-num">{{ s.num }}<span>{{ s.unit }}</span></div>
              <div class="stat-label">{{ s.label }}</div>
            </div>
          </div>
        </div>

        <!-- 右侧文字 -->
        <div class="service-content" data-aos="fade-left" data-aos-delay="100">
          <div class="section-title">
            <span class="tag">{{ serviceIntro.tag }}</span>
            <h2>{{ serviceIntro.title }}</h2>
          </div>
          <p>{{ serviceIntro.desc1 }}</p>
          <p style="margin-top:16px">{{ serviceIntro.desc2 }}</p>

          <!-- Tab 认证 -->
          <div class="cert-tabs">
            <div class="tab-headers">
              <button
                v-for="tab in serviceIntro.tabs"
                :key="tab.id"
                :class="['tab-btn', { active: activeTab === tab.id }]"
                @click="activeTab = tab.id"
              >{{ tab.label }}</button>
            </div>
            <div class="tab-body">
              <ul>
                <li v-for="item in currentTab.items" :key="item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="8" fill="#0a4f8e" opacity="0.12"/>
                    <path d="M4 8l2.5 2.5L12 5.5" stroke="#0a4f8e" stroke-width="1.8" stroke-linecap="round"/>
                  </svg>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { serviceIntro } from '../data/content.js'

const activeTab = ref(serviceIntro.tabs[0].id)
const currentTab = computed(() => serviceIntro.tabs.find(t => t.id === activeTab.value))
</script>

<style scoped>
.service-intro { background: white; }
.service-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 64px; align-items: center; }
.service-image-wrap { position: relative; }
.service-img { width: 100%; border-radius: 12px; object-fit: cover; max-height: 480px; }
.stats-badge {
  position: absolute;
  bottom: -24px; left: 24px;
  background: var(--primary);
  color: white;
  padding: 20px 28px;
  border-radius: 10px;
  display: flex;
  gap: 32px;
  box-shadow: var(--shadow-lg);
}
.stat-num { font-size: 28px; font-weight: 700; line-height: 1; }
.stat-num span { font-size: 18px; }
.stat-label { font-size: 13px; opacity: 0.85; margin-top: 4px; }
.service-content { padding-left: 16px; }
.service-content p { color: var(--text-muted); line-height: 1.8; }
.cert-tabs { margin-top: 32px; }
.tab-headers { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; }
.tab-btn {
  padding: 8px 20px; border: 1px solid var(--border); background: white;
  border-radius: 20px; cursor: pointer; font-size: 14px; font-weight: 500;
  transition: var(--transition); color: var(--text-muted);
}
.tab-btn.active, .tab-btn:hover {
  background: var(--primary); border-color: var(--primary); color: white;
}
.tab-body ul { display: flex; flex-direction: column; gap: 12px; }
.tab-body li { display: flex; align-items: center; gap: 10px; font-weight: 500; }

@media (max-width: 900px) {
  .service-grid { grid-template-columns: 1fr; gap: 64px; }
  .service-content { padding-left: 0; }
  .stats-badge { position: relative; bottom: auto; left: auto; margin-top: 24px; justify-content: center; }
}
</style>
