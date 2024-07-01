<template>
  <coach-filter v-if="hasCoaches" @enableFilters="setFilters" />
  <div v-if="hasCoaches" class="coaches">
    <TransitionGroup name="list">
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
  <div v-if="!hasFilteredCoaches || !hasCoaches" class="no-coaches">
    <h3>No coaches found...</h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
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
    ...mapGetters(['filteredCoaches', 'hasCoaches']),
    ...mapActions(['getCoaches']),
    coaches() {
      return this.filteredCoaches(this.activeFilters);
    },
    hasFilteredCoaches() {
      return this.coaches.length > 0;
    },
  },
  methods: {
    setFilters(enabledFilters) {
      this.activeFilters = enabledFilters;
    },
  },
  created() {
    this.$store.dispatch('getCoaches');
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

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  scale: 80%;
  opacity: 0;
}

.list-leave-active {
  position: absolute;
}
</style>
