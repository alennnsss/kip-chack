<script setup>
import AppHeader from './components/AppHeader.vue';
import CtaSection from './components/CtaSection.vue';
import IconSprite from './components/IconSprite.vue';
import ScrollTopButton from './components/ScrollTopButton.vue';
</script>

<template>
  <IconSprite />
  <AppHeader />
  <main>
    <RouterView />
    <CtaSection />
  </main>
  <ScrollTopButton />
</template>
