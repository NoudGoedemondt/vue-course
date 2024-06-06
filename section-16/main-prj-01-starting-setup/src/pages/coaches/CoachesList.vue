<template>
  <div v-if="hasCoaches" class="coaches">
    <coaches-list-item
      v-for="coach in coaches"
      :key="coach.id"
      :id="coach.id"
      :firstName="coach.firstName"
      :lastName="coach.lastName"
      :areas="coach.areas"
      :description="coach.description"
      :rate="coach.rate"
    />
  </div>
  <div v-else class="no-coaches">
    <h3>No coaches found...</h3>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import CoachesListItem from './CoachesListItem.vue';

export default {
  components: {
    CoachesListItem,
  },
  computed: {
    ...mapState({
      coaches: (state) => state.coaches,
    }),
    ...mapGetters(['hasCoaches']),
  },
};
</script>

<style scoped>
.coaches,
.no-coaches {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
