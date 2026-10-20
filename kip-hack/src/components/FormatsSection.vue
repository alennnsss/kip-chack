<script setup>
import AppIcon from './AppIcon.vue';
import SectionHead from './SectionHead.vue';

const formats = [
  { title: 'Индивидуальные занятия', icon: 'user' },
  { title: 'Групповые тренировки', icon: 'users' },
  { title: 'Корпоративные мероприятия', icon: 'briefcase' },
];
</script>

<template>
  <section id="formats" class="section section--dark">
    <div class="container">
      <SectionHead eyebrow="Форматы занятий" title="Для каждого" />
      <ul class="grid">
        <li v-for="format in formats" :key="format.title" class="card card--dark">
          <div class="card__row">
            <span class="card__icon"><AppIcon :name="format.icon" /></span>
            <RouterLink class="round-btn" to="#prices" :aria-label="`Цены: ${format.title}`">
              <AppIcon name="arrow-up-right" />
            </RouterLink>
          </div>
          <h3 class="card__title">{{ format.title }}</h3>
        </li>
      </ul>
      <img
        class="formats__image photo"
        src="/img/knife-competition.jpg"
        alt="Мишень со стрелами"
        width="1280"
        height="920"
        loading="lazy"
      >
    </div>
  </section>
</template>
