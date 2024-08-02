import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import About from '../views/About.vue';
import Curriculum from '../views/Curriculum.vue';
import Habilidades from '../views/Habilidades.vue';
import Trabajos from '../views/Trabajos.vue';
import Contacto from '../views/Contacto.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/curriculum',
    name: 'curriculum',
    component: Curriculum,
  },
  {
    path: '/habilidades',
    name: 'habilidades',
    component: Habilidades,
  },
  {
    path: '/trabajos',
    name: 'trabajos',
    component: Trabajos,
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
