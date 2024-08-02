<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableItems"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script setup>
import { defineProps, computed, toRef } from 'vue';
import ProjectItem from './ProjectItem.vue';
import useSearch from '../../hooks/search.js';

const props = defineProps(['user']);
const user = toRef(props, 'user');

const projects = computed(() => (user.value ? user.value.projects : []));

const { enteredSearchTerm, availableItems, updateSearch } = useSearch(
  projects,
  'title'
);

const hasProjects = computed(
  () => user.value.projects && availableItems.value.length > 0
);
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
