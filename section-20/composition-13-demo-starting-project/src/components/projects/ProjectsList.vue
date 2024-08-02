<template>
  <base-container v-if="props.user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
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
import { defineProps, ref, computed, watch, toRef } from 'vue';
import ProjectItem from './ProjectItem.vue';

const props = defineProps(['user']);
const user = toRef(props, 'user');

const enteredSearchTerm = ref('');
const activeSearchTerm = ref('');

watch(enteredSearchTerm, (value) => {
  setTimeout(() => {
    if (value === enteredSearchTerm.value) {
      activeSearchTerm.value = value;
    }
  }, 300);
});

watch(user, () => (enteredSearchTerm.value = ''));

const availableProjects = computed(() => {
  if (activeSearchTerm.value) {
    return user.value.projects.filter((project) =>
      project.title.includes(activeSearchTerm.value)
    );
  }
  return user.value.projects;
});

const hasProjects = computed(
  () => user.value.projects && availableProjects.value.length > 0
);

const updateSearch = (value) => (enteredSearchTerm.value = value);
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
