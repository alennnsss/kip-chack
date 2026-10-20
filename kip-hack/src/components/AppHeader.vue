<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import AppIcon from './AppIcon.vue';

const links = [
  { to: '/', label: 'Главная' },
  { to: '/#directions', label: 'Направления' },
  { to: '/#about', label: 'О школе' },
  { to: '/#formats', label: 'Форматы' },
  { to: '/gallery', label: 'Галерея' },
  { to: '/gallery#instructors', label: 'Инструкторы' },
  { to: '/#prices', label: 'Цены' },
  { to: '/#contacts', label: 'Контакты' },
];

const isOpen = ref(false);
const burger = ref(null);

watch(isOpen, (open) => document.body.classList.toggle('is-locked', open));

function onKeydown(event) {
  if (event.key === 'Escape' && isOpen.value) {
    isOpen.value = false;
    burger.value.focus();
  }
}

onMounted(() => document.addEventListener('keydown', onKeydown));
onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown));
</script>

<template>
  <header class="header" :class="{ 'header--open': isOpen }">
    <div class="container header__inner">
      <RouterLink class="logo" to="/" @click="isOpen = false">
        <span class="logo__name">KIPCHACK</span>
        <span class="logo__caption">школа метания ножей</span>
      </RouterLink>
      <button
        ref="burger"
        class="round-btn round-btn--filled header__burger"
        type="button"
        :aria-label="isOpen ? 'Закрыть меню' : 'Открыть меню'"
        :aria-expanded="isOpen"
        aria-controls="menu"
        @click="isOpen = !isOpen"
      >
        <AppIcon :name="isOpen ? 'close' : 'menu'" />
      </button>
    </div>
    <nav v-show="isOpen" id="menu" class="menu" aria-label="Основное меню">
      <ul class="menu__list">
        <li v-for="link in links" :key="link.to">
          <RouterLink class="menu__link" :to="link.to" @click="isOpen = false">{{ link.label }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
