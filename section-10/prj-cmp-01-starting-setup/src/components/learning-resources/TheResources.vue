<template>
  <base-card>
    <base-button
      :mode="selectedTab === 'stored-resources' ? null : 'flat'"
      @click="setSelectedTab('stored-resources')"
      >Stored Resources</base-button
    >
    <base-button
      :mode="selectedTab === 'add-resource' ? null : 'flat'"
      @click="setSelectedTab('add-resource')"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component
      :is="selectedTab"
      @resource-added="addResource"
      @delete-resource="deleteResource"
    ></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'google',
          title: 'Google',
          description: 'Find information on the internet',
          link: 'https://www.google.com/',
        },
        {
          id: 'udemy',
          title: 'Udemy',
          description: 'Follow programming courses',
          link: 'https://www.udemy.com/',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(newResource) {
      newResource.id = new Date().toISOString();
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
      console.log(`Added new Resource with id: ${newResource.id}`);
    },
    deleteResource(resId) {
      const index = this.storedResources.findIndex(
        (resource) => resource.id === resId
      );
      if (index !== -1) {
        this.storedResources.splice(index, 1);
      } else {
        console.log(
          `Resource with id: ${resId} not found in stored Resources.`
        );
      }
    },
  },
};
</script>
