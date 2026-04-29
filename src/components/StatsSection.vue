<template>
  <section class="stats section-padding section-bg">
    <div class="container">
      <div class="stats-grid">
        <div
          v-for="(s, i) in stats"
          :key="i"
          class="stat-card"
          data-aos="fade-up"
          :data-aos-delay="i * 100"
        >
          <div class="stat-icon">{{ statIcons[i] }}</div>
          <div class="stat-value">
            <CountUp :end="s.num" :duration="2.5" /><span class="plus">+</span>
          </div>
          <p>{{ s.label }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA 联系我们 -->
  <section id="contact" class="cta section-padding">
    <div class="container">
      <div class="cta-inner" data-aos="fade-up">
        <div class="cta-left">
          <div class="cta-icon">💬</div>
          <div>
            <h3>和我们讨论并开始IT咨询</h3>
            <p>为您提供精练的专业技术解决方案</p>
          </div>
        </div>
        <a href="mailto:sunny.sun@sino-tek.com" class="theme-btn white">联系我们 ›</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { stats } from '../data/content.js'

const statIcons = ['🤝', '✅', '📊', '👨‍💻']

// 简单的数字动画组件（内联）
const CountUp = {
  props: { end: Number, duration: Number },
  setup(props) {
    const current = ref(0)
    onMounted(() => {
      const step = props.end / (props.duration * 60)
      const timer = setInterval(() => {
        current.value = Math.min(current.value + step, props.end)
        if (current.value >= props.end) { current.value = props.end; clearInterval(timer) }
      }, 1000 / 60)
    })
    return () => Math.floor(current.value)
  },
  render() { return String(Math.floor(this.$el ? this.current : 0)) },
  template: '<span>{{ Math.floor(current) }}</span>',
  data() { return { current: 0 } },
  mounted() {
    const step = this.end / (this.duration * 60)
    const timer = setInterval(() => {
      this.current = Math.min(this.current + step, this.end)
      if (this.current >= this.end) { this.current = this.end; clearInterval(timer) }
    }, 1000 / 60)
  },
}
</script>

<style scoped>
.stats { }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.stat-card {
  text-align: center;
  padding: 40px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: var(--shadow);
  transition: var(--transition);
}
.stat-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.stat-icon { font-size: 40px; margin-bottom: 16px; }
.stat-value { font-size: 48px; font-weight: 800; color: var(--primary); line-height: 1; }
.plus { font-size: 28px; }
.stat-card p { font-size: 15px; color: var(--text-muted); margin-top: 10px; }

/* CTA */
.cta { background: white; padding: 40px 0; }
.cta-inner {
  display: flex; justify-content: space-between; align-items: center;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  padding: 40px 48px;
  border-radius: 16px;
  color: white;
}
.cta-left { display: flex; align-items: center; gap: 20px; }
.cta-icon { font-size: 48px; }
.cta-left h3 { font-size: 22px; font-weight: 700; }
.cta-left p { color: rgba(255,255,255,0.8); margin-top: 4px; }

@media (max-width: 900px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .cta-inner { flex-direction: column; gap: 24px; text-align: center; padding: 32px 24px; }
}
@media (max-width: 480px) {
  .stats-grid { grid-template-columns: 1fr 1fr; }
}
</style>
