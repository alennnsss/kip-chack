<script setup>
import AppIcon from './AppIcon.vue';
import { contacts } from '../data/contacts.js';
</script>

<template>
  <section class="cta">
    <img class="cta__bg photo" src="/img/knives-target.jpg" alt="" width="1280" height="853" loading="lazy">
    <div class="container cta__inner">
      <h2 class="title title--hero">Сделай первый бросок</h2>
      <p class="cta__text">Инструктаж, обучение и сопровождение входят в цену. Предварительная запись — по WhatsApp.</p>
      <a class="btn btn--accent" :href="contacts.whatsappHref" target="_blank" rel="noopener">
        Записаться
        <AppIcon name="arrow-right" />
      </a>
    </div>
  </section>
</template>
