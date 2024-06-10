<template>
  <h1>ContactCoach</h1>
  <p>{{ coach.firstName }}</p>
  <p>{{ coach.lastName }}</p>
  <p>{{ coach.areas }}</p>
  <p>{{ coach.description }}</p>
  <p>{{ coach.rate }}</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    id: String,
  },
  computed: {
    ...mapGetters(['getCoachById']),
    coach() {
      return this.getCoachById(this.id);
    },
  },
};
</script>
