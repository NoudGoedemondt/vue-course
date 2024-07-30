<template>
  <form @submit.prevent="addTodo">
    <input type="text" ref="newTodo" />
    <button>Add</button>
  </form>
  <div class="widget">
    <div class="head">
      <div class="head-text">
        <h3>{{ todoCount }}</h3>
        <p>To-dos</p>
      </div>
      <svg class="icon">
        <circle class="circle" cx="35" cy="35" r="35" fill="#51aaf2" />
      </svg>
    </div>
    <div class="todos">
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
import { ref, computed } from 'vue';
import TodoItem from './TodoItem.vue';

const todos = ref([]);
const newTodo = ref(null);
let id = 1;

const todoCount = computed(() => todos.value.length);

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
/* * {
  outline: red 1px auto;
} */

h3 {
  color: white;
  font-size: 60px;
  font-weight: 200;
  margin: 0;
}

p {
  color: #51aaf2;
  font-size: 24px;
  font-weight: 400;
  margin: 0;
}

.widget {
  background-color: #1c1c1c;
  margin: 3rem auto;
  width: 676px;
  height: 711px;
  border-radius: 7%;
  padding: 35px;
}

.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
  border-bottom: 3px #c6c6c8 solid;
}

.icon {
  width: 70px;
  height: 70px;
  opacity: 50%;
}
</style>
