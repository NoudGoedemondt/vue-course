<template>
  <div class="container">
    <h3>To Do:</h3>
    <todo-item
      v-for="todo in todos"
      :key="todo.id"
      :id="todo.id"
      :todo="todo.todo"
      @remove-todo="removeTodo"
    />
    <div class="controls">
      <input type="text" ref="newTodo" />
      <button @click="addTodo">Add To Do</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TodoItem from './components/TodoItem.vue';

const todos = ref([]);
const newTodo = ref(null);

let id = 1;
const addTodo = () => {
  todos.value.push({ id: id, todo: newTodo.value.value });
  id++;
  newTodo.value.value = null;
};

const removeTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};
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

h3 {
  margin: 0;
  margin-bottom: 1rem;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}

.controls {
  margin-top: 1rem;
}
</style>
