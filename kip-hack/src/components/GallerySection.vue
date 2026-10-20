<script setup>
import { ref, watch } from 'vue';
import AppIcon from './AppIcon.vue';
import SectionHead from './SectionHead.vue';
import { useSlider } from '../composables/useSlider.js';

const photos = [
  { src: '/img/throwing-knives.jpg', alt: 'Набор метательных ножей' },
  { src: '/img/knives-target.jpg', alt: 'Ножи в мишени' },
  { src: '/img/axe.jpg', alt: 'Топор в деревянной мишени' },
  { src: '/img/arrows-target.jpg', alt: 'Стрелы в центре мишени' },
  { src: '/img/arrows-paper-target.jpg', alt: 'Стрелы в бумажной мишени' },
  { src: '/img/archery-range.jpg', alt: 'Тир для стрельбы из лука' },
];

const { index, goTo, prev, next, current, total, trackStyle } = useSlider(photos.length);
const thumbsList = ref(null);

watch(index, (i) => {
  const list = thumbsList.value;
  list.scrollTo({ left: list.children[i].offsetLeft - list.offsetLeft, behavior: 'smooth' });
});
</script>

<template>
  <section id="gallery" class="section">
    <div class="container">
      <SectionHead tag="h1" eyebrow="Галерея" title="Атмосфера KIPCHACK" />
      <div class="slider">
        <div class="slider__viewport">
          <ul class="slider__track" :style="trackStyle">
            <li v-for="(photo, i) in photos" :key="photo.src" class="slider__slide" :aria-hidden="i !== index">
              <img class="slider__image photo" :src="photo.src" :alt="photo.alt" loading="lazy">
            </li>
          </ul>
        </div>
        <div ref="thumbsList" class="slider__thumbs">
          <button
            v-for="(photo, i) in photos"
            :key="photo.src"
            class="slider__thumb"
            type="button"
            :aria-label="`Фото ${i + 1}`"
            :aria-current="i === index"
            @click="goTo(i)"
          >
            <img class="photo" :src="photo.src" alt="" loading="lazy">
          </button>
        </div>
        <div class="slider__controls">
          <button class="round-btn" type="button" aria-label="Предыдущее фото" @click="prev">
            <AppIcon name="arrow-left" />
          </button>
          <p class="slider__counter"><span class="slider__current">{{ current }}</span> / {{ total }}</p>
          <button class="round-btn" type="button" aria-label="Следующее фото" @click="next">
            <AppIcon name="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
