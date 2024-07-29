<template>
  <div class="container">
    <h3>TO DO</h3>
    <todo-item
      v-for="todo in todos"
      :key="todo.id"
      :id="todo.id"
      :todo="todo.todo"
      @remove-todo="removeTodo"
    />
    <form @submit.prevent="addTodo">
      <input type="text" ref="newTodo" />
      <button>Add</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TodoItem from './TodoItem.vue';

const todos = ref([]);
const newTodo = ref(null);
let id = 1;

const addTodo = () => {
  const todoText = newTodo.value.value.trim();
  if (!todoText) {
    return;
  }

  todos.value.push({ id: id, todo: todoText });
  id++;
  newTodo.value.value = null;
};

const removeTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};
</script>

<style scoped>
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

button {
  background-color: none;
  border: none;
  color: #272727;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  padding: 4px;
  margin: 4px;
  cursor: pointer;
  border-radius: 12px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: lightgray;
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
