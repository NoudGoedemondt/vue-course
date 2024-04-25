<template>
  <section>
    <user-data @update-user="updateUser"></user-data>
    <active-user :username="user.username" :userage="user.age"></active-user>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        age: null,
      },
    };
  },
  methods: {
    updateUser(name, age) {
      this.user.username = name;
      this.user.age = age;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
#app section {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#app .container {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  margin: 10px;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#app h2,
h3,
input,
button {
  margin: 10px;
}
</style>
