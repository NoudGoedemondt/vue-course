<template>
  <div class="todo-item">
    <button @click="$emit('remove-todo', props.id)">X</button>
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
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 4px 25%;
}

button {
  border-radius: 100%;
  padding: 0 3px;
}
</style>
