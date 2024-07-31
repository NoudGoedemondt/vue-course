<template>
  <user-alert
    v-if="alertIsVisible"
    title="Add a User?"
    @close="changeAlertVisibility(false)"
  >
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="changeAlertVisibility(true)">Add User</button>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import UserAlert from './UserAlert.vue';

const alertIsVisible = ref(false);

const changeAlertVisibility = (value) => (alertIsVisible.value = value);
</script>
