<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import AppIcon from './AppIcon.vue';
import AppLogo from './AppLogo.vue';
import { navLinks } from '../data/navigation.js';

const isOpen = ref(false);
const header = ref(null);
const burger = ref(null);

function close() {
  isOpen.value = false;
}

function onKeydown(event) {
  if (event.key === 'Escape' && isOpen.value) {
    close();
    burger.value.focus();
  }
}

function onDocumentClick(event) {
  if (isOpen.value && !header.value.contains(event.target)) close();
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown);
  document.addEventListener('click', onDocumentClick);
});
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown);
  document.removeEventListener('click', onDocumentClick);
});
</script>

<template>
  <header ref="header" class="header">
    <div class="container header__inner">
      <AppLogo @click="close" />
      <button
        ref="burger"
        class="round-btn round-btn--filled"
        type="button"
        :aria-label="isOpen ? 'Закрыть меню' : 'Открыть меню'"
        :aria-expanded="isOpen"
        aria-controls="menu"
        @click="isOpen = !isOpen"
      >
        <AppIcon :name="isOpen ? 'close' : 'menu'" />
      </button>
      <Transition name="menu">
        <nav v-if="isOpen" id="menu" class="menu" aria-label="Основное меню">
          <ul class="menu__list">
            <li v-for="(link, i) in navLinks" :key="link.to" class="menu__item" :style="{ '--i': i }">
              <RouterLink class="menu__link" :to="link.to" @click="close">{{ link.label }}</RouterLink>
            </li>
          </ul>
        </nav>
      </Transition>
    </div>
  </header>
</template>
