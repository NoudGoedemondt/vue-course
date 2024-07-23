<template>
  <div class="todo-item">
    <h4>{{ todo }}</h4>
    <button @click="$emit('removeTodo', id)">X</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps(['todo', 'id']);
defineEmits(['removeTodo']);
</script>

<style scoped>
h4 {
  margin: 0.5rem;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
