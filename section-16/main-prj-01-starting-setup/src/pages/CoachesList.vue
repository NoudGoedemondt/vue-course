<template>
  <coach-filter v-if="hasCoaches" @enableFilters="setFilters" />
  <div v-if="hasCoaches" class="coaches">
    <TransitionGroup name="list" mode="out-in">
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
    </TransitionGroup>
  </div>
  <div v-else class="no-coaches">
    <h3>No coaches found...</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CoachesListItem from '../components/coaches/CoachesListItem.vue';
import CoachFilter from '../components/coaches/CoachFilter.vue';

export default {
  components: {
    CoachesListItem,
    CoachFilter,
  },
  data() {
    return {
      activeFilters: [],
    };
  },
  computed: {
    ...mapGetters(['hasCoaches']),
    ...mapGetters(['filteredCoaches']),
    coaches() {
      return this.filteredCoaches(this.activeFilters);
    },
  },
  methods: {
    setFilters(enabledFilters) {
      this.activeFilters = enabledFilters;
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

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease-in;
}
.list-enter-from,
.list-leave-to {
  scale: 80%;
  opacity: 0;
}
</style>
