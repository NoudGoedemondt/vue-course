<template>
  <div class="todo-item">
    <button @click="$emit('removeTodo', id)">X</button>
    <p>{{ todo }}</p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps(['todo', 'id']);
defineEmits(['removeTodo']);
</script>

<style scoped>
p {
  margin: 0.5rem;
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
