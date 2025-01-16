// filepath: /c:/Users/Wes/Documents/Portfolio/Portfolio/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Hero from '../views/Hero.vue';
import Projects from '../views/Projects.vue';
import Resume from '../views/Resume.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', component: Hero },
  { path: '/projects', component: Projects },
  { path: '/resume', component: Resume },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;