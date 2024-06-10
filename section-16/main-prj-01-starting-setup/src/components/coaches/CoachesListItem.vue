<template>
  <div class="coach-item">
    <div class="coach-item-head">
      <h2>{{ fullName }}</h2>
      <ul>
        <base-badge
          v-for="area in areas"
          :key="area"
          :text="area"
          :type="area"
        />
      </ul>
    </div>
    <div class="coach-item-body">
      <h4>${{ rate }}/hr</h4>
      <p v-if="showDetails">{{ description }}</p>
      <a @click="toggleDetails">
        {{ showDetails ? 'Hide Details' : 'Show Details' }}
      </a>
    </div>
    <div class="coach-item-actions">
      <router-link :to="coachContactLink">Contact >></router-link>
    </div>
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
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
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

.coach-item-head h2 {
  flex-shrink: 0;
}

.coach-item-head ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
}

.coach-item-body {
  margin: 1rem 0;
}

.coach-item-body h4 {
  margin-bottom: 1rem;
}

.coach-item-body a,
.coach-item-actions a {
  cursor: pointer;
  text-decoration: underline;
  color: blue;
}

.coach-item-actions {
  display: flex;
  align-items: center;
  justify-content: end;
}
</style>
