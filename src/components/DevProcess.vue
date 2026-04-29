<template>
  <section id="process" class="dev-process section-padding">
    <div class="container">
      <div class="process-grid">
        <!-- 左侧流程 -->
        <div class="process-left">
          <div class="section-title" data-aos="fade-right">
            <span class="tag">开发流程</span>
            <h2>交付优质的解决方案</h2>
          </div>
          <p class="process-desc" data-aos="fade-right" data-aos-delay="100">
            通过严谨的开发流程，我们确保每一个项目都能按时交付，并且符合客户的高标准和期望。<br>
            我们致力于透明沟通和精细管理，以确保项目的每一个阶段都能顺利进行，最终交付优质的解决方案。
          </p>
          <div class="steps">
            <div
              v-for="(step, i) in devProcess"
              :key="i"
              :class="['step-item', { active: activeStep === i }]"
              @click="activeStep = i"
              data-aos="fade-right"
              :data-aos-delay="i * 60"
            >
              <div class="step-num">{{ String(i + 1).padStart(2, '0') }}</div>
              <div class="step-content">
                <h5>{{ step.step }}</h5>
                <p>{{ step.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧图片 -->
        <div class="process-right" data-aos="fade-left">
          <img
            :src="currentImg"
            :alt="devProcess[activeStep].step"
            class="process-img"
            @error="e => e.target.style.display='none'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { devProcess } from '../data/content.js'
const activeStep = ref(0)
const currentImg = computed(() => '/assets/img/project/' + devProcess[activeStep.value].img)
</script>

<style scoped>
.dev-process { background: var(--primary); color: white; }
.dev-process .section-title .tag { background: rgba(255,255,255,0.15); color: white; }
.dev-process .section-title h2 { color: white; }
.process-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
.process-desc { color: rgba(255,255,255,0.75); line-height: 1.8; margin-bottom: 32px; }
.steps { display: flex; flex-direction: column; gap: 4px; }
.step-item {
  display: flex;
  gap: 16px;
  padding: 16px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
  border: 1px solid transparent;
}
.step-item:hover, .step-item.active {
  background: rgba(255,255,255,0.12);
  border-color: rgba(255,255,255,0.2);
}
.step-num { font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.5); padding-top: 2px; min-width: 24px; }
.step-item.active .step-num { color: white; }
.step-content h5 { font-size: 15px; font-weight: 600; color: rgba(255,255,255,0.8); }
.step-item.active .step-content h5 { color: white; }
.step-content p { font-size: 13px; color: rgba(255,255,255,0.55); margin-top: 2px; }
.step-item.active .step-content p { color: rgba(255,255,255,0.75); }
.process-img {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  max-height: 500px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  transition: var(--transition);
  background: rgba(255,255,255,0.1);
  min-height: 200px;
}

@media (max-width: 900px) {
  .process-grid { grid-template-columns: 1fr; }
  .process-right { display: none; }
}
</style>
