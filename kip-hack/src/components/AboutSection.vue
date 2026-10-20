<script setup>
import AppIcon from './AppIcon.vue';
import SectionHead from './SectionHead.vue';

const features = [
  { icon: 'award', title: 'Опытные инструкторы' },
  { icon: 'shield', title: 'Инструктаж по технике безопасности' },
  { icon: 'target', title: 'Профессиональный инвентарь' },
  { icon: 'users', title: 'Для любого возраста и уровня' },
];
</script>

<template>
  <section id="about" class="section">
    <div class="container about">
      <div class="about__content">
        <SectionHead eyebrow="О школе" title="KIPCHACK — больше, чем спорт" />
        <p class="text">
          Мы учим метать ножи, топоры и сюрикены, стрелять из лука с нуля. Инструктаж по технике безопасности,
          профессиональное обучение и сопровождение входят в цену каждого занятия.
        </p>
        <ul class="features">
          <li v-for="feature in features" :key="feature.title" class="feature">
            <AppIcon class="feature__icon" :name="feature.icon" />
            <span class="feature__title">{{ feature.title }}</span>
          </li>
        </ul>
      </div>
      <img
        class="about__image photo"
        src="/img/archery-range.jpg"
        alt="Стрелы на фоне мишеней в тире"
        width="960"
        height="1280"
        loading="lazy"
      >
      <RouterLink class="btn about__action" to="#formats">
        Узнать больше
        <AppIcon name="arrow-right" />
      </RouterLink>
    </div>
  </section>
</template>
