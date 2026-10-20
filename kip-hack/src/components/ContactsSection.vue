<script setup>
import AppIcon from './AppIcon.vue';
import SectionHead from './SectionHead.vue';
import { contacts } from '../data/contacts.js';
</script>

<template>
  <section id="contacts" class="section">
    <div class="container contacts">
      <SectionHead eyebrow="Как нас найти" title="Мы ждём вас в Алматы" />
      <ul class="contacts__list">
        <li class="contacts__item">
          <span class="contacts__icon"><AppIcon name="pin" /></span>
          <span>
            <span class="contacts__label">Адрес</span>
            <a class="contacts__value" :href="contacts.mapHref" target="_blank" rel="noopener">{{ contacts.address }}</a>
            <span class="text"> ({{ contacts.district }})</span>
          </span>
        </li>
        <li class="contacts__item">
          <span class="contacts__icon"><AppIcon name="clock" /></span>
          <span>
            <span class="contacts__label">Часы работы</span>
            <span class="contacts__value">{{ contacts.hours }}</span>
          </span>
        </li>
        <li class="contacts__item">
          <span class="contacts__icon"><AppIcon name="phone" /></span>
          <span>
            <span class="contacts__label">Телефон, WhatsApp</span>
            <a class="contacts__value" :href="contacts.phoneHref">{{ contacts.phone }}</a>
          </span>
        </li>
      </ul>
      <iframe class="contacts__map" title="KIPCHACK на карте 2ГИС" :src="contacts.mapEmbed" loading="lazy" />
      <a class="btn contacts__action" :href="contacts.mapHref" target="_blank" rel="noopener">
        Построить маршрут
        <AppIcon name="arrow-right" />
      </a>
    </div>
  </section>
</template>
