<script setup>
import AppIcon from './AppIcon.vue';
import { contacts } from '../data/contacts.js';

const stats = [
  { value: '3+', label: 'направления' },
  { value: '500+', label: 'учеников' },
  { value: '95%', label: 'возвращаются' },
];
</script>

<template>
  <section class="hero">
    <div class="container hero__inner">
      <div class="hero__head">
        <h1 class="title title--hero">Точность в характере</h1>
        <p class="hero__subtitle">Школа метания ножей, стрельбы из лука и топоров в Алматы</p>
      </div>
      <img class="hero__image photo" src="/img/throwing-knives.jpg" alt="Метательные ножи" width="1280" height="1212">
      <div class="hero__body">
        <a class="btn" :href="contacts.whatsappHref" target="_blank" rel="noopener">
          Записаться на занятие
          <AppIcon name="arrow-right" />
        </a>
        <ul class="stats">
          <li v-for="stat in stats" :key="stat.label" class="stats__item">
            <span class="stats__value">{{ stat.value }}</span>
            <span class="stats__label">{{ stat.label }}</span>
          </li>
        </ul>
      </div>
      <RouterLink class="hero__scroll" to="#directions">
        Скролл
        <span class="round-btn"><AppIcon name="arrow-down" /></span>
      </RouterLink>
    </div>
  </section>
</template>
