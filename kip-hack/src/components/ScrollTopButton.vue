<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import AppIcon from './AppIcon.vue';

const threshold = 300;
const isVisible = ref(false);

function onScroll() {
  isVisible.value = window.scrollY > threshold;
}

function scrollToTop() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
}

onMounted(() => {
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));
</script>

<template>
  <TransitionGroup name="scroll-top">
    <button
      v-if="isVisible"
      key="scroll-top"
      class="round-btn round-btn--filled scroll-top"
      type="button"
      aria-label="Наверх"
      @click="scrollToTop"
    >
      <AppIcon name="arrow-up" />
    </button>
  </TransitionGroup>
</template>
