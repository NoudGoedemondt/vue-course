<template>
  <div class="coach-item">
    <div class="coach-item-head">
      <h3>{{ firstName + ' ' + lastName }}</h3>
      <ul>
        <base-badge
          v-for="area in areas"
          :key="area"
          :text="area"
          :type="area"
        />
      </ul>
    </div>
    <h4>${{ rate }}/hr</h4>
    <p class="coach-item-description" v-if="showDetails">{{ description }}</p>
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
    areas: Array,
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

<style scoped>
.coach-item {
  outline: 1px solid lightgray;
  border-radius: 5px;
  padding: 1rem;
  margin: 0.5rem;
  width: 80vw;
  max-width: 1042px;
}

.coach-item-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.coach-item-head h3 {
  flex-shrink: 0;
}

.coach-item-head ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
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
