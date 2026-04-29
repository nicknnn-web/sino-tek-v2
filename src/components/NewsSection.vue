<template>
  <section id="news" class="news section-padding section-bg">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <span class="tag">新闻动态</span>
        <h2>要闻 | 新闻详情</h2>
      </div>
      <div class="news-grid">
        <article
          v-for="(item, i) in news"
          :key="i"
          :class="['news-card', { featured: i === 0 }]"
          data-aos="fade-up"
          :data-aos-delay="i * 150"
        >
          <div
            class="news-img"
            :style="{ backgroundImage: `url('/assets/img/news/${item.img}')` }"
          >
            <a href="#news" class="news-arrow">→</a>
          </div>
          <div class="news-body">
            <time class="news-date">{{ item.date }}</time>
            <h3><a href="#news">{{ item.title }}</a></h3>
            <a href="#news" class="read-more">阅读更多 <span>›</span></a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { news } from '../data/content.js'
</script>

<style scoped>
.news-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.news-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
}
.news-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.news-img {
  height: 220px;
  background-size: cover;
  background-position: center;
  background-color: var(--bg-section);
  position: relative;
}
.news-arrow {
  position: absolute; bottom: 16px; right: 16px;
  width: 40px; height: 40px;
  background: var(--primary); color: white;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; opacity: 0; transform: scale(0.8);
  transition: var(--transition);
}
.news-card:hover .news-arrow { opacity: 1; transform: scale(1); }
.news-body { padding: 24px; }
.news-date { font-size: 13px; color: var(--text-muted); }
.news-body h3 { font-size: 16px; font-weight: 600; margin: 10px 0 16px; line-height: 1.6; }
.news-body h3 a { color: var(--text); transition: color 0.2s; }
.news-body h3 a:hover { color: var(--primary); }
.read-more { font-size: 14px; color: var(--primary); font-weight: 600; display: flex; align-items: center; gap: 4px; }
.read-more span { transition: transform 0.2s; }
.read-more:hover span { transform: translateX(4px); }

@media (max-width: 768px) {
  .news-grid { grid-template-columns: 1fr; }
}
</style>
