<script setup>
import AppLogo from './AppLogo.vue';
import { contacts } from '../data/contacts.js';
import { navLinks } from '../data/navigation.js';

const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <AppLogo />
        <p class="text">Метание ножей, топоров и сюрикенов, стрельба из лука в Алматы.</p>
      </div>
      <nav aria-label="Разделы сайта">
        <p class="eyebrow">Разделы</p>
        <ul class="footer__list footer__list--columns">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink class="footer__link" :to="link.to">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </nav>
      <div>
        <p class="eyebrow">Контакты</p>
        <ul class="footer__list">
          <li>
            <a class="footer__link" :href="contacts.mapHref" target="_blank" rel="noopener">{{ contacts.address }}</a>
          </li>
          <li><a class="footer__link" :href="contacts.phoneHref">{{ contacts.phone }}</a></li>
          <li><a class="footer__link" :href="contacts.whatsappHref" target="_blank" rel="noopener">WhatsApp</a></li>
          <li class="text">{{ contacts.hours }}</li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="footer__bottom">
        <p>© {{ year }} KIPCHACK</p>
        <div>
            <p>
              Фото: <a class="footer__link" href="/credits.txt" target="_blank" rel="noopener">Wikimedia Commons</a>
              (CC BY, CC BY-SA)
            </p>
            <div class="made-by">
              <p>Сделано Саин Аленом</p>
            </div>
        </div>    
      </div>
    </div>
    
  </footer>
</template>
