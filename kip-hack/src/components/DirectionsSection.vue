<script setup>
import { ref } from 'vue';
import AppIcon from './AppIcon.vue';
import InfoModal from './InfoModal.vue';
import SectionHead from './SectionHead.vue';

const directions = [
  {
    title: 'Метание ножей',
    image: '/img/knives-target.jpg',
    alt: 'Метательные ножи в мишени',
    width: 1280,
    height: 853,
    description: 'Хват, стойка и расчёт оборотов ножа. Начинаем с безопасной техники на короткой дистанции и постепенно усложняем. Входит во все пакеты: «Старт», «Драйв» и «Полное погружение».',
  },
  {
    title: 'Стрельба из лука',
    image: '/img/arrows-target.jpg',
    alt: 'Стрелы в мишени',
    width: 1280,
    height: 960,
    description: 'Постановка стойки, натяжение тетивы и прицеливание. Можно прийти на отдельное занятие — 8 000 ₸ за 60 минут — или взять пакет «Полное погружение».',
  },
  {
    title: 'Метание топоров',
    image: '/img/axe.jpg',
    alt: 'Топор в деревянной мишени',
    width: 960,
    height: 1280,
    description: 'Мощный бросок одной и двумя руками, работа с дистанцией и вращением. Входит в пакеты «Драйв» и «Полное погружение».',
  },
];

const activeDirection = ref(null);
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
            <button
              class="round-btn"
              type="button"
              aria-haspopup="dialog"
              :aria-label="`Подробнее: ${direction.title}`"
              @click="activeDirection = direction"
            >
              <AppIcon name="arrow-up-right" />
            </button>
          </div>
        </li>
      </ul>
    </div>
    <InfoModal :item="activeDirection" @close="activeDirection = null" />
  </section>
</template>
