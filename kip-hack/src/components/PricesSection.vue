<script setup>
import { ref } from 'vue';
import PriceCard from './PriceCard.vue';
import SectionHead from './SectionHead.vue';
import { priceGroups } from '../data/prices.js';

const activeId = ref(priceGroups[0].id);
const tabs = ref([]);

function onTabKeydown(event, i) {
  const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
  if (!step) return;
  const next = (i + step + priceGroups.length) % priceGroups.length;
  activeId.value = priceGroups[next].id;
  tabs.value[next].focus();
}
</script>

<template>
  <section id="prices" class="section">
    <div class="container">
      <SectionHead eyebrow="Цены" title="Выбери свой формат" />
      <div class="tabs" role="tablist" aria-label="Прайс">
        <button
          v-for="(group, i) in priceGroups"
          :id="`tab-${group.id}`"
          :key="group.id"
          ref="tabs"
          class="tabs__tab"
          type="button"
          role="tab"
          :aria-controls="`panel-${group.id}`"
          :aria-selected="group.id === activeId"
          :tabindex="group.id === activeId ? 0 : -1"
          @click="activeId = group.id"
          @keydown="onTabKeydown($event, i)"
        >
          {{ group.label }}
        </button>
      </div>
      <div
        v-for="group in priceGroups"
        v-show="group.id === activeId"
        :id="`panel-${group.id}`"
        :key="group.id"
        class="grid"
        :class="{ 'grid--4': group.items.length === 4 }"
        role="tabpanel"
        :aria-labelledby="`tab-${group.id}`"
      >
        <PriceCard v-for="item in group.items" :key="item.title" v-bind="item" />
      </div>
      <p class="text prices__note">
        Инструктаж по технике безопасности, профессиональное обучение и сопровождение входят в цену.
        Предварительная запись обязательна по WhatsApp.
      </p>
    </div>
  </section>
</template>
