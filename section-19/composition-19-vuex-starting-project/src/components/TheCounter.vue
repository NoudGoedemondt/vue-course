<template>
  <h2>{{ counter }}</h2>
  <h3>double: {{ double }}</h3>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const counter = computed(() => store.state.counter);
const double = computed(() => store.getters.double);
</script>
