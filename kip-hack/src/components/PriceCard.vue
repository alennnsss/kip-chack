<script setup>
import AppIcon from './AppIcon.vue';
import { contacts } from '../data/contacts.js';

defineProps({
  title: { type: String, required: true },
  price: { type: String, required: true },
  unit: { type: String, required: true },
  badge: { type: String, default: '' },
  note: { type: String, default: '' },
  features: { type: Array, default: () => [] },
});
</script>

<template>
  <article class="card" :class="{ 'card--dark': badge }">
    <p v-if="badge" class="badge">{{ badge }}</p>
    <h3 class="card__title">{{ title }}</h3>
    <p class="price">
      <span class="price__current">{{ price }}</span>
      <span class="price__unit">{{ unit }}</span>
    </p>
    <p v-if="note" class="text">{{ note }}</p>
    <ul v-if="features.length" class="checklist">
      <li v-for="feature in features" :key="feature" class="checklist__item">
        <AppIcon name="check" />{{ feature }}
      </li>
    </ul>
    <a
      class="round-btn round-btn--filled card__action"
      :href="contacts.whatsappHref"
      target="_blank"
      rel="noopener"
      :aria-label="`Записаться в WhatsApp: ${title}`"
    >
      <AppIcon name="arrow-up-right" />
    </a>
  </article>
</template>
