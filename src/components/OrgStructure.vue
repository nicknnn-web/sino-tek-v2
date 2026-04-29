<template>
  <section id="structure" class="org section-padding section-bg">
    <div class="container">
      <div class="section-title text-center" data-aos="fade-up">
        <span class="tag">软件部组织结构</span>
        <h2>通过划分不同的职能团队<br>高效管理软件开发、维护和运营的部门架构</h2>
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
            <img
              :src="`/assets/img/team/${member.img}`"
              :alt="member.title"
              @error="e => e.target.style.display='none'"
            />
            <div class="avatar-fallback">{{ member.title[0] }}</div>
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
.org { }
.org-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.org-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  text-align: center;
}
.org-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
.org-avatar { position: relative; height: 180px; background: var(--bg-section); overflow: hidden; }
.org-avatar img { width: 100%; height: 100%; object-fit: cover; }
.avatar-fallback {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 48px; font-weight: 700; color: white;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
}
.org-info { padding: 20px 16px; }
.org-info h4 { font-size: 17px; font-weight: 700; color: var(--primary); margin-bottom: 8px; }
.org-info p { font-size: 13px; color: var(--text-muted); line-height: 1.7; }

@media (max-width: 900px) {
  .org-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .org-grid { grid-template-columns: 1fr; }
}
</style>
