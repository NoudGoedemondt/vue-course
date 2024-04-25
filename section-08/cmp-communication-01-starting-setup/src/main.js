import { createApp } from "vue";

import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import FriendEntry from "./components/FriendEntry.vue";

const app = createApp(App);

app.component("friend-contact", FriendContact);
app.component("friend-entry", FriendEntry);

app.mount("#app");
