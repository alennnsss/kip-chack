<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  tag: { type: String, default: 'h2' },
});
</script>

<template>
  <div class="section-head">
    <p class="eyebrow">{{ eyebrow }}</p>
    <component :is="tag" class="title">{{ title }}</component>
  </div>
</template>
