<template>
  <button @click="incr">Increment</button>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const incr = computed(() => store.commit('increment'));
</script>
