<template>
  <h2>My Course Goal</h2>
  <h3 v-if="showGoal">{{ goal }}</h3>
  <button @click="toggleGoal">Toggle Goal</button>

  <h2>My Second Course Goal</h2>
  <h3 v-if="goalObj.showGoal">{{ goalObj.goal }}</h3>
  <button @click="toggleSecondGoal">Toggle Second Goal</button>
</template>

<script setup>
import { ref, reactive } from 'vue';

const goal = ref('Keihard stunten in vue');
const showGoal = ref(true);

const goalObj = reactive({ goal: 'Keihard stunten in vue', showGoal: true });

const toggleGoal = () => {
  showGoal.value = !showGoal.value;
};

const toggleSecondGoal = () => {
  goalObj.showGoal = !goalObj.showGoal;
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
