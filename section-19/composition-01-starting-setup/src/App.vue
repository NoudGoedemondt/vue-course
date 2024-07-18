<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="incrAge">Increment Age</button>
  </section>
  <section class="container">
    <h2>{{ fullName }}</h2>
    <div>
      <label for="firstName">First name</label>
      <input type="text" id="firstName" v-model="firstName" />
    </div>
    <div>
      <label for="lastName">Last name</label>
      <input type="text" id="lastName" v-model="lastName" />
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';

const user = reactive({ name: 'noud', age: 24 });

const firstName = ref('');
const lastName = ref('');

const incrAge = () => {
  user.age++;
};

const fullName = computed(() => {
  return firstName.value + ' ' + lastName.value;
});
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
