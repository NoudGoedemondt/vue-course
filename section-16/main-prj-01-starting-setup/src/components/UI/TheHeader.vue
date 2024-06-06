<template>
  <header>
    <h2><router-link to="/">Find a Coach</router-link></h2>
    <nav>
      <ul>
        <li>
          <router-link to="/coaches">Coaches</router-link>
        </li>
        <li>
          <router-link to="/requests">Requests</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 1rem;
}

a {
  margin: 1rem;
  padding: 0.5rem;
  text-decoration: none;
  color: black;
}

a:active,
a:hover,
a.router-link-active {
  outline: 1px solid lightgray;
  border-radius: 5px;
}

h2 {
  margin: 0;
}

ul {
  display: flex;
  justify-content: center;
  list-style: none;
}
</style>
