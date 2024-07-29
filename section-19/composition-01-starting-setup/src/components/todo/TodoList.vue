<template>
  <form @submit.prevent="addTodo">
    <input type="text" ref="newTodo" />
    <button>Add</button>
  </form>
  <div class="container">
    <b>To Do</b>
    <div class="content">
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :id="todo.id"
        :todo="todo.todo"
        @remove-todo="removeTodo"
      />
    </div>
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
b {
  color: rgb(0, 255, 0);
  margin: 0;
  margin-bottom: 1rem;
}

.container {
  background-color: black;
  margin: 3rem auto;
  height: 300px;
  width: 300px;
  max-width: 30rem;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
</style>
