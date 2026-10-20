<script setup>
import AppIcon from './AppIcon.vue';
import SectionHead from './SectionHead.vue';
import { useSlider } from '../composables/useSlider.js';

const instructors = [
  { name: 'Арман', role: 'Метание ножей, стаж 8 лет', photo: '/img/instructor-1.svg' },
  { name: 'Дана', role: 'Стрельба из лука, стаж 6 лет', photo: '/img/instructor-2.svg' },
  { name: 'Ерлан', role: 'Метание топоров, стаж 5 лет', photo: '/img/instructor-3.svg' },
];

const { index, prev, next, current, total, trackStyle } = useSlider(instructors.length);
</script>

<template>
  <section id="instructors" class="section">
    <div class="container instructors">
      <SectionHead eyebrow="Наши инструкторы" title="Опыт. Практика. Вдохновение." />
      <div class="slider">
        <div class="slider__viewport">
          <ul class="slider__track" :style="trackStyle">
            <li v-for="(instructor, i) in instructors" :key="instructor.name" class="slider__slide" :aria-hidden="i !== index">
              <figure class="instructor">
                <img
                  class="instructor__photo"
                  :src="instructor.photo"
                  :alt="`Инструктор ${instructor.name}`"
                  width="800"
                  height="1000"
                  loading="lazy"
                >
                <figcaption>
                  <p class="card__title">{{ instructor.name }}</p>
                  <p class="text">{{ instructor.role }}</p>
                </figcaption>
              </figure>
            </li>
          </ul>
          <div class="slider__arrows">
            <button class="round-btn round-btn--filled" type="button" aria-label="Предыдущий инструктор" @click="prev">
              <AppIcon name="arrow-left" />
            </button>
            <button class="round-btn round-btn--filled" type="button" aria-label="Следующий инструктор" @click="next">
              <AppIcon name="arrow-right" />
            </button>
          </div>
        </div>
        <p class="slider__counter"><span class="slider__current">{{ current }}</span> / {{ total }}</p>
      </div>
    </div>
  </section>
</template>
