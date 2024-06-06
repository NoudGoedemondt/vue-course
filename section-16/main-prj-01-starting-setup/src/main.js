import { createApp } from 'vue';

import router from './router';
import store from './store/index.js';
import App from './App.vue';

import BaseBadge from './components/base/BaseBadge.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-badge', BaseBadge);

app.mount('#app');
