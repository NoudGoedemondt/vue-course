import { createApp } from 'vue';
import { createStore } from 'vuex';

import router from './router.js';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    SET_LOGGED_IN(state, status) {
      state.isLoggedIn = status;
    },
  },
  actions: {
    logIn(context) {
      context.commit('SET_LOGGED_IN', true);
    },
    logOut(context) {
      context.commit('SET_LOGGED_IN', false);
    },
  },
  getters: {},
});

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-badge', BaseBadge);

app.mount('#app');
