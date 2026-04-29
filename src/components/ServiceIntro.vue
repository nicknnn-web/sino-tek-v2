<template>
  <section id="service" class="service-intro section-padding">
    <div class="container">
      <div class="service-grid">
        <!-- 左侧 -->
        <div class="service-image-wrap" data-aos="fade-right">
          <img :src="'/assets/img/feature/trusted-1.jpg'" alt="飞鹏盛元科技" class="service-img" />
          <!-- 叠加数字 -->
          <div class="stats-badge">
            <div v-for="s in serviceIntro.stats" :key="s.label" class="stat-item">
              <div class="stat-num">{{ s.num }}<span>{{ s.unit }}</span></div>
              <div class="stat-label">{{ s.label }}</div>
            </div>
          </div>
          <!-- 绿色装饰线 -->
          <div class="accent-bar"></div>
        </div>

        <!-- 右侧 -->
        <div class="service-content" data-aos="fade-left" data-aos-delay="100">
          <div class="section-label">深耕行业</div>
          <h2 class="service-headline">{{ serviceIntro.title }}</h2>
          <p class="service-body">{{ serviceIntro.desc1 }}</p>
          <p class="service-body">{{ serviceIntro.desc2 }}</p>

          <!-- 认证 Tab -->
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
              <TransitionGroup name="fade" tag="ul">
                <li v-for="item in currentTab.items" :key="item">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="9" fill="#00AA55" opacity="0.12"/>
                    <path d="M5 9l2.5 2.5L13 6.5" stroke="#00AA55" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  {{ item }}
                </li>
              </TransitionGroup>
            </div>
          </div>

          <a href="#project" class="btn btn-primary" style="margin-top:32px">
            查看研发成果 ›
          </a>
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
.service-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 80px; align-items: start; }
.service-image-wrap { position: relative; }
.service-img { width: 100%; border-radius: var(--radius-lg); object-fit: cover; height: 520px; }
.accent-bar {
  position: absolute; bottom: -16px; left: -16px;
  width: 80px; height: 6px; background: var(--green);
  border-radius: 3px;
}
.stats-badge {
  position: absolute; bottom: -20px; right: -20px;
  background: linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%);
  color: white; padding: 24px 32px;
  border-radius: var(--radius);
  display: flex; gap: 40px;
  box-shadow: var(--shadow-lg);
}
.stat-num { font-size: 32px; font-weight: 700; line-height: 1; }
.stat-num span { font-size: 16px; }
.stat-label { font-size: 13px; opacity: 0.8; margin-top: 4px; }

.service-content { padding-top: 8px; }
.service-headline {
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 700; color: var(--text);
  line-height: 1.3; margin-bottom: 24px;
}
.service-body { color: var(--text-muted); line-height: 1.85; margin-bottom: 16px; }

.cert-tabs { margin-top: 32px; }
.tab-headers { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; }
.tab-btn {
  padding: 8px 20px; border: 1.5px solid var(--border);
  background: white; border-radius: 50px; cursor: pointer;
  font-size: 14px; font-weight: 500; color: var(--text-muted);
  transition: all 0.25s ease;
}
.tab-btn.active, .tab-btn:hover {
  background: var(--green); border-color: var(--green); color: white;
}
.tab-body ul { display: flex; flex-direction: column; gap: 12px; }
.tab-body li {
  display: flex; align-items: center; gap: 12px;
  font-size: 15px; font-weight: 500; color: var(--text);
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 900px) {
  .service-grid { grid-template-columns: 1fr; gap: 48px; }
  .stats-badge { position: relative; bottom: auto; right: auto; margin-top: 24px; justify-content: center; }
}
@media (max-width: 600px) {
  .service-img { height: 240px; }
}
</style>
