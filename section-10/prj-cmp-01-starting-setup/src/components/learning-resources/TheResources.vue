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
  <component
    :is="selectedTab"
    @resource-added="handleResourceAdded"
  ></component>
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
    handleResourceAdded(newResource) {
      this.storedResources.push(newResource);
    },
  },
};
</script>
