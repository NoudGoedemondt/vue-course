<template>
  <coach-filter v-if="hasCoaches" @enableFilters="filterCoaches" />
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
import CoachesListItem from '../components/coaches/CoachesListItem.vue';
import CoachFilter from '../components/coaches/CoachFilter.vue';

export default {
  components: {
    CoachesListItem,
    CoachFilter,
  },
  computed: {
    ...mapState({
      coaches: (state) => state.coaches,
    }),
    ...mapGetters(['hasCoaches']),
    //   ...mapGetters(['filteredCoaches']),
    //   coaches() {
    //     return this.filteredCoaches(this.activeFilters);
    //   },
  },
  methods: {
    filterCoaches(filters) {
      console.log(filters);
    },
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

.no-coaches {
  margin-top: 2rem;
}
</style>
