<script setup>
import { ref, watch } from 'vue';
import AppIcon from './AppIcon.vue';
import { contacts } from '../data/contacts.js';

const props = defineProps({ direction: { type: Object, default: null } });
const emit = defineEmits(['close']);
const dialog = ref(null);

watch(() => props.direction, (direction) => {
  if (direction) dialog.value.showModal();
  else dialog.value.close();
  document.body.classList.toggle('is-locked', Boolean(direction));
}, { flush: 'post' });

function onClick(event) {
  if (event.target === dialog.value) dialog.value.close();
}
</script>

<template>
  <dialog ref="dialog" class="modal" aria-labelledby="direction-modal-title" @close="emit('close')" @click="onClick">
    <div v-if="direction" class="card card--dark modal__body">
      <button class="round-btn round-btn--filled modal__close" type="button" aria-label="Закрыть" autofocus @click="dialog.close()">
        <AppIcon name="close" />
      </button>
      <img
        class="card__media photo"
        :src="direction.image"
        :alt="direction.alt"
        :width="direction.width"
        :height="direction.height"
      >
      <h3 id="direction-modal-title" class="card__title">{{ direction.title }}</h3>
      <p class="text">{{ direction.description }}</p>
      <a class="btn" :href="contacts.whatsappHref" target="_blank" rel="noopener">
        Записаться
        <AppIcon name="arrow-right" />
      </a>
    </div>
  </dialog>
</template>
