<template>
  <form @submit="logIn">
    <div class="form-control">
      <label for="email">E-mail</label>
      <input type="email" id="email" />
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" id="password" />
    </div>
    <div class="form-control login-button">
      <base-button>Log in</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logIn() {},
  },
};
</script>

<style scoped>
form {
  outline: 1px solid lightgray;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem auto;
  width: 60vw;
  max-width: 768px;
  text-align: center;
}

.form-control {
  display: flex;
  justify-content: space-between;
  margin: 1rem 10%;
}

.form-control label {
  font-weight: bold;
  margin-right: 1rem;
}

.form-control input {
  border: solid 1px black;
  border-radius: 3px;
}

.login-button {
  justify-content: center;
}
</style>
