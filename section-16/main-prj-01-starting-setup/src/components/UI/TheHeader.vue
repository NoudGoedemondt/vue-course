<template>
  <header>
    <h2><router-link to="/">Find a Coach</router-link></h2>
    <nav>
      <ul>
        <li><router-link to="/coaches">Coaches</router-link></li>
        <li v-if="isAuthenticated">
          <router-link to="/requests">Requests</router-link>
        </li>
        <li v-if="isAuthenticated">
          <router-link to="/register">Register</router-link>
        </li>
        <li>
          <router-link :to="isAuthenticated ? '/login' : '/login'">
            {{ isAuthenticated ? `Logged in as: ${userEmail}` : 'Log in' }}
          </router-link>
        </li>
        <li v-if="isAuthenticated">
          <base-button @click="logOut">Log Out</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isAuthenticated']),
    ...mapState(['userEmail']),
  },
  methods: {
    ...mapActions(['logOut']),
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 1rem 0;
}

nav > ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}

h2 {
  margin: 0;
}

a {
  margin: 0 1rem;
  padding: 0.5rem;
  text-decoration: none;
  color: black;
}

li a:active,
li a:hover,
li a.router-link-active {
  outline: 1px solid lightgray;
  border-radius: 5px;
}
</style>
