<template>
  <the-header title="RememberMe"></the-header>
  <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue';
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  components: {
    TheHeader,
    StoredResources,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'google',
          title: 'Google',
          description: 'Find information on the internet',
          link: 'https://www.google.com/',
        },
        {
          id: 'udemy',
          title: 'Udemy',
          description: 'Follow programming courses',
          link: 'https://www.udemy.com/',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
