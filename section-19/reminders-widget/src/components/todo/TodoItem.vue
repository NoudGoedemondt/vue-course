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
.todo-item {
  display: flex;
  align-items: center;
  justify-content: left;
  border-bottom: 3px dotted #c6c6c8;
  padding-bottom: 1.5rem;
  padding-top: 0.5rem;
}

button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #1c1c1c;
  border: 2px solid #c6c6c8;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #c6c6c8;
}

p {
  margin: 0.5rem;
  color: white;
  font-size: 24px;
  margin-left: 1.5rem;
  width: 100%;
}
</style>
