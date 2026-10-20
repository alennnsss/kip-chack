<script setup>
import { ref } from 'vue';
import AppIcon from './AppIcon.vue';
import InfoModal from './InfoModal.vue';
import SectionHead from './SectionHead.vue';

const formats = [
  { title: 'Индивидуальные занятия', icon: 'user' },
  { title: 'Групповые тренировки', icon: 'users' },
  {
    title: 'Корпоративные мероприятия',
    icon: 'briefcase',
    details: {
      title: 'Корпоративные мероприятия',
      image: '/img/knife-competition.jpg',
      alt: 'Мишени на поляне для выездного мероприятия',
      width: 1280,
      height: 920,
      description: 'Проводим тимбилдинги и корпоративные мероприятия у нас в зале или на выезде: на природе, на базе отдыха или на вашей площадке. Привозим мишени, ножи, топоры, сюрикены, луки и всё снаряжение. Инструкторы проводят инструктаж по технике безопасности и ведут программу: обучение, командные соревнования и финальный турнир. Подойдёт для корпоратива, дня рождения компании или знакомства новой команды. Напишите нам в WhatsApp — подберём формат, программу и время под ваш запрос.',
    },
  },
];

const activeFormat = ref(null);
</script>

<template>
  <section id="formats" class="section section--dark">
    <div class="container">
      <SectionHead eyebrow="Форматы занятий" title="Для каждого" />
      <ul class="grid">
        <li v-for="format in formats" :key="format.title" class="card card--dark">
          <div class="card__row">
            <span class="card__icon"><AppIcon :name="format.icon" /></span>
            <button
              v-if="format.details"
              class="round-btn"
              type="button"
              aria-haspopup="dialog"
              :aria-label="`Подробнее: ${format.title}`"
              @click="activeFormat = format.details"
            >
              <AppIcon name="arrow-up-right" />
            </button>
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
    <InfoModal :item="activeFormat" @close="activeFormat = null" />
  </section>
</template>
