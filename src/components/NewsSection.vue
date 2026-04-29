<template>
  <section id="news" class="news section-padding section-bg">
    <div class="container">
      <div class="news-top" data-aos="fade-up">
        <div class="section-label">新闻动态</div>
        <h2>最新资讯</h2>
      </div>
      <div class="news-grid">
        <article
          v-for="(item, i) in news"
          :key="i"
          :class="['news-card', { featured: i === 0 }]"
          data-aos="fade-up"
          :data-aos-delay="i * 150"
        >
          <div class="news-img">
            <img :src="'/assets/img/news/' + item.img" :alt="item.title" />
            <div class="news-date-badge">
              <time>{{ item.date }}</time>
            </div>
          </div>
          <div class="news-body">
            <h3><a href="#news">{{ item.title }}</a></h3>
            <a href="#news" class="read-more">
              阅读全文 <span>›</span>
            </a>
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
.news {}
.news-top { max-width: 600px; margin-bottom: 48px; }
.news-top h2 { font-size: clamp(26px, 3vw, 38px); margin-top: 8px; }
.news-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }
.news-card {
  background: white; border-radius: var(--radius-lg);
  overflow: hidden; box-shadow: var(--shadow);
  transition: all 0.3s ease;
}
.news-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.news-img { position: relative; overflow: hidden; height: 220px; }
.news-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
.news-card:hover .news-img img { transform: scale(1.05); }
.news-date-badge {
  position: absolute; bottom: 16px; left: 16px;
  background: var(--blue); color: white;
  padding: 6px 14px; border-radius: 50px;
  font-size: 13px; font-weight: 600;
}
.news-body { padding: 28px; }
.news-body h3 { font-size: 16px; font-weight: 600; line-height: 1.6; margin-bottom: 16px; }
.news-body h3 a { color: var(--text); transition: color 0.2s; }
.news-body h3 a:hover { color: var(--blue); }
.read-more {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 14px; font-weight: 600; color: var(--blue);
  transition: gap 0.2s;
}
.read-more:hover { gap: 8px; }
@media (max-width: 768px) { .news-grid { grid-template-columns: 1fr; } }
</style>
