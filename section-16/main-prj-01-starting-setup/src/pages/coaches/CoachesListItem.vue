<template>
  <div class="coach-item">
    <div>
      <h3>{{ firstName + ' ' + lastName }}</h3>
      <h4>${{ rate }}/hr</h4>
    </div>
    <div class="coach-item-description" v-if="showDetails">
      <p>{{ description }}</p>
    </div>
    <p class="coach-item-details-link" @click="toggleDetails">
      {{ showDetails ? 'Hide Details' : 'Show Details' }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    firstName: String,
    lastName: String,
    description: String,
    rate: Number,
  },
  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
};
</script>

<style>
.coach-item {
  outline: 1px solid lightgray;
  border-radius: 5px;
  padding: 1rem;
  margin: 0.5rem;
  width: 80vw;
  max-width: 1042px;
}

.coach-item-description {
  margin: 1rem 0;
}

.coach-item-details-link {
  cursor: pointer;
  text-decoration: underline;
  color: blue;
}
</style>
