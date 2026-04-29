<template>
  <section id="process" class="dev-process section-padding">
    <div class="container">
      <div class="process-header" data-aos="fade-up">
        <div class="section-label">开发流程</div>
        <h2>规范化流程，确保交付质量</h2>
        <p>通过严谨的项目管理方法论，每个阶段都有明确的质量门禁</p>
      </div>

      <div class="process-grid">
        <!-- 左侧：步骤列表 -->
        <div class="process-steps" data-aos="fade-right">
          <div
            v-for="(step, i) in devProcess"
            :key="i"
            :class="['step-item', { active: activeStep === i }]"
            @click="activeStep = i"
          >
            <div class="step-left">
              <div class="step-num">{{ String(i + 1).padStart(2, '0') }}</div>
              <div class="step-connector" v-if="i < devProcess.length - 1"></div>
            </div>
            <div class="step-right">
              <h5>{{ step.step }}</h5>
              <p>{{ step.desc }}</p>
            </div>
          </div>
        </div>

        <!-- 右侧：图片展示 -->
        <div class="process-preview" data-aos="fade-left">
          <div class="preview-card">
            <img :src="currentImg" :alt="devProcess[activeStep].step" class="preview-img" @error="e => e.target.style.display='none'" />
            <div class="preview-label">
              <span class="preview-step">{{ String(activeStep + 1).padStart(2, '0') }}</span>
              <span class="preview-title">{{ devProcess[activeStep].step }}</span>
            </div>
            <!-- 进度指示 -->
            <div class="preview-dots">
              <span
                v-for="(_, i) in devProcess"
                :key="i"
                :class="['dot', { active: activeStep === i }]"
                @click.stop="activeStep = i"
              ></span>
            </div>
          </div>
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
.dev-process { background: var(--bg-section); }
.process-header { max-width: 600px; margin-bottom: 56px; }
.process-header h2 { font-size: clamp(26px, 3vw, 38px); margin-top: 8px; }
.process-header p { margin-top: 12px; }
.process-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }

/* 步骤 */
.process-steps { display: flex; flex-direction: column; gap: 0; }
.step-item {
  display: flex; gap: 20px; padding: 16px 0;
  cursor: pointer; transition: all 0.25s ease;
}
.step-left {
  display: flex; flex-direction: column; align-items: center;
  min-width: 40px;
}
.step-num {
  width: 40px; height: 40px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 700;
  background: white; color: var(--text-muted);
  border: 2px solid var(--border);
  transition: all 0.25s ease; flex-shrink: 0;
}
.step-item.active .step-num {
  background: var(--blue); color: white; border-color: var(--blue);
  box-shadow: 0 4px 16px rgba(0,102,204,0.3);
}
.step-connector {
  width: 2px; flex: 1; min-height: 24px;
  background: linear-gradient(to bottom, var(--border), transparent);
  margin: 4px auto;
}
.step-item.active .step-connector { background: linear-gradient(to bottom, var(--blue), transparent); }
.step-right { padding-top: 8px; }
.step-right h5 { font-size: 16px; font-weight: 600; color: var(--text-muted); transition: color 0.2s; }
.step-item.active .step-right h5 { color: var(--blue); }
.step-right p { font-size: 14px; color: var(--text-muted); margin-top: 4px; line-height: 1.6; }
.step-item.active .step-right p { color: var(--text); }

/* 预览卡片 */
.preview-card {
  position: relative; border-radius: var(--radius-lg); overflow: hidden;
  box-shadow: var(--shadow-lg);
}
.preview-img {
  width: 100%; height: 420px; object-fit: cover;
  transition: all 0.4s ease;
}
.preview-label {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 24px;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  color: white; display: flex; align-items: center; gap: 16px;
}
.preview-step {
  font-size: 40px; font-weight: 700; opacity: 0.5; line-height: 1;
}
.preview-title { font-size: 20px; font-weight: 700; }
.preview-dots {
  position: absolute; bottom: 20px; right: 24px;
  display: flex; gap: 6px;
}
.dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: rgba(255,255,255,0.4); cursor: pointer;
  transition: all 0.2s;
}
.dot.active { background: white; width: 24px; border-radius: 4px; }

@media (max-width: 900px) {
  .process-grid { grid-template-columns: 1fr; }
  .preview-card { display: none; }
}
</style>
