import { createWebHistory, createRouter } from 'vue-router';

import CoachesList from './pages/CoachesList.vue';
import CoachRegistration from './pages/CoachRegistration.vue';
import UserAuth from './pages/UserAuth.vue';
import ContactCoach from './pages/ContactCoach.vue';
import RequestsReceived from './pages/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id/contact',
      component: ContactCoach,
      props: true,
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { requiresAuth: true },
    },
    { path: '/login', component: UserAuth, meta: { requiresUnauth: true } },
    {
      path: '/requests',
      component: RequestsReceived,
      meta: { requiresAuth: true },
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/login');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
