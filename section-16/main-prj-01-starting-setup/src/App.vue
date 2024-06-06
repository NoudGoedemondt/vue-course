<template>
  <the-header />
  <router-view />
</template>

<script>
import TheHeader from './components/UI/TheHeader.vue';

export default {
  components: {
    TheHeader,
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
