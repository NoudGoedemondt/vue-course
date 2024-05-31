<template>
  <p>{{ isAuth }}</p>
  <button @click="logIn" v-if="!isAuth">Login</button>
  <button @click="logOut" v-if="isAuth">Logout</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions(['logIn', 'logOut']),
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
};
</script>
