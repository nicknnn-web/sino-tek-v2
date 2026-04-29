<template>
  <section id="structure" class="org section-padding section-bg">
    <div class="container">
      <div class="org-top" data-aos="fade-up">
        <div class="section-label">团队架构</div>
        <h2>专业分工，高效协作</h2>
        <p>四大核心团队，覆盖从需求到交付的全生命周期</p>
      </div>

      <div class="org-grid">
        <div
          v-for="(member, i) in orgStructure"
          :key="i"
          class="org-card"
          data-aos="fade-up"
          :data-aos-delay="i * 100"
        >
          <div class="org-avatar">
            <img :src="'/assets/img/team/' + member.img" :alt="member.title" @error="e => e.target.style.display='none'" />
            <div class="avatar-fallback">{{ member.title[0] }}</div>
            <div class="avatar-badge">{{ String(i + 1).padStart(2, '0') }}</div>
          </div>
          <div class="org-info">
            <h4>{{ member.title }}</h4>
            <p>{{ member.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { orgStructure } from '../data/content.js'
</script>

<style scoped>
.org {}
.org-top { max-width: 600px; margin-bottom: 48px; }
.org-top h2 { font-size: clamp(26px, 3vw, 38px); margin-top: 8px; }
.org-top p { margin-top: 12px; }
.org-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.org-card {
  background: white; border-radius: var(--radius-lg);
  overflow: hidden; box-shadow: var(--shadow);
  transition: all 0.3s ease;
}
.org-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
.org-avatar { position: relative; height: 200px; background: var(--bg-section); overflow: hidden; }
.org-avatar img { width: 100%; height: 100%; object-fit: cover; }
.avatar-fallback {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 56px; font-weight: 700; color: white;
  background: linear-gradient(135deg, var(--blue) 0%, var(--green) 100%);
}
.avatar-badge {
  position: absolute; top: 12px; left: 12px;
  background: var(--blue); color: white;
  font-size: 12px; font-weight: 700;
  padding: 4px 10px; border-radius: 50px;
}
.org-info { padding: 24px 20px; }
.org-info h4 { font-size: 17px; font-weight: 700; color: var(--blue); margin-bottom: 8px; }
.org-info p { font-size: 13px; color: var(--text-muted); line-height: 1.7; }

@media (max-width: 900px) { .org-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .org-grid { grid-template-columns: 1fr; } }
</style>
