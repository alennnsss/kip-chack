import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView, meta: { title: 'Школа метания ножей в Алматы' } },
    { path: '/gallery', component: () => import('../views/GalleryView.vue'), meta: { title: 'Галерея и инструкторы' } },
    { path: '/prices', redirect: { path: '/', hash: '#prices' } },
    { path: '/contacts', redirect: { path: '/', hash: '#contacts' } },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: 'smooth' };
    return { top: 0 };
  },
});

router.afterEach((to) => {
  document.title = `KIPCHACK — ${to.meta.title}`;
});

export default router;
