<script setup>
import AppIcon from './AppIcon.vue';
import SectionHead from './SectionHead.vue';

const directions = [
  { title: 'Метание ножей', image: '/img/knives-target.jpg', alt: 'Метательные ножи в мишени', width: 1280, height: 853 },
  { title: 'Стрельба из лука', image: '/img/arrows-target.jpg', alt: 'Стрелы в мишени', width: 1280, height: 960 },
  { title: 'Метание топоров', image: '/img/axe.jpg', alt: 'Топор в деревянной мишени', width: 960, height: 1280 },
];
</script>

<template>
  <section id="directions" class="section section--dark">
    <div class="container">
      <SectionHead eyebrow="Наши направления" title="Выбери свою стихию" />
      <ul class="grid">
        <li v-for="direction in directions" :key="direction.title" class="card card--dark">
          <img
            class="card__media photo"
            :src="direction.image"
            :alt="direction.alt"
            :width="direction.width"
            :height="direction.height"
            loading="lazy"
          >
          <div class="card__row">
            <h3 class="card__title">{{ direction.title }}</h3>
            <RouterLink class="round-btn" to="#prices" :aria-label="`Цены: ${direction.title}`">
              <AppIcon name="arrow-up-right" />
            </RouterLink>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
