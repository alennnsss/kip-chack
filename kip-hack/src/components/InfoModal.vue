<script setup>
import { ref, watch } from 'vue';
import AppIcon from './AppIcon.vue';
import { contacts } from '../data/contacts.js';

const props = defineProps({ item: { type: Object, default: null } });
const emit = defineEmits(['close']);
const dialog = ref(null);

watch(() => props.item, (item) => {
  if (item) dialog.value.showModal();
  else dialog.value.close();
  document.body.classList.toggle('is-locked', Boolean(item));
}, { flush: 'post' });

function onClick(event) {
  if (event.target === dialog.value) dialog.value.close();
}
</script>

<template>
  <dialog ref="dialog" class="modal" aria-labelledby="info-modal-title" @close="emit('close')" @click="onClick">
    <div v-if="item" class="card card--dark modal__body">
      <button class="round-btn round-btn--filled modal__close" type="button" aria-label="Закрыть" autofocus @click="dialog.close()">
        <AppIcon name="close" />
      </button>
      <img
        class="card__media photo"
        :src="item.image"
        :alt="item.alt"
        :width="item.width"
        :height="item.height"
      >
      <h3 id="info-modal-title" class="card__title">{{ item.title }}</h3>
      <p class="text">{{ item.description }}</p>
      <a class="btn" :href="contacts.whatsappHref" target="_blank" rel="noopener">
        Записаться
        <AppIcon name="arrow-right" />
      </a>
    </div>
  </dialog>
</template>
