import { createApp } from 'vue';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import BasePopup from './components/BasePopup.vue';

const app = createApp(App);

app.component('base-modal', BaseModal);
app.component('base-popup', BasePopup);

app.mount('#app');
