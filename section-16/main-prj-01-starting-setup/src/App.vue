<template>
  <div class="test">
    <label for="userId">enter userId</label>
    <input
      type="text"
      id="userId"
      ref="userIdInput"
      @keyup.enter="changeUserId"
    />
    {{ userId }}
    <button @click="clearCoaches">clear coaches</button>
    <button @click="loadRequests">load requests</button>
  </div>
  <the-header />
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import { mapState } from 'vuex';
import TheHeader from './components/UI/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  computed: {
    ...mapState(['userId', 'requests', 'coaches']),
  },
  methods: {
    changeUserId() {
      const userId = this.$refs.userIdInput.value;
      this.$store.dispatch('setUserId', userId);
    },
    loadRequests() {
      this.$store.dispatch('getRequests');
    },
    clearCoaches() {
      this.$store.commit('CLEAR_COACHES');
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li {
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
}

li {
  list-style: none;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.1s ease-out;
}

.route-leave-active {
  transition: all 0.1s ease-in;
}

.route-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
