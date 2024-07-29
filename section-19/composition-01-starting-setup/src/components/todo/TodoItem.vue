<template>
  <div class="todo-item">
    <button @click="$emit('remove-todo', props.id)"></button>
    <p>{{ props.todo }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['todo', 'id']);
</script>

<style scoped>
p {
  margin: 0.5rem;
  color: white;
  font-size: 24px;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: left;
}

button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #1c1c1c;
  border: 2px solid white;
  color: #272727;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  padding: 0 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: lightgray;
}
</style>
