<script setup>
import AppHeader from './components/AppHeader.vue';
import CtaSection from './components/CtaSection.vue';
import IconSprite from './components/IconSprite.vue';
import ScrollTopButton from './components/ScrollTopButton.vue';
import { Analytics } from "@vercel/analytics/next"
</script>

<template>
  <IconSprite />
  <AppHeader />
  <main>
    <RouterView />
    <CtaSection />
  </main>
  <ScrollTopButton />
  <Analytics />
</template>
