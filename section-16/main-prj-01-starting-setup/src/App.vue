<template>
  <div class="test">
    <label for="userId">enter userId</label>
    <input
      type="text"
      id="userId"
      ref="userIdInput"
      @keyup.enter="changeUserId"
    />
  </div>
  <the-header />
  <router-view />
</template>

<script>
import TheHeader from './components/UI/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  methods: {
    changeUserId() {
      const userId = this.$refs.userIdInput.value;
      this.$store.dispatch('setUserId', userId);
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
</style>
