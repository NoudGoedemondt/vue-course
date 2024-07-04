<template>
  <div class="loading-spinner" v-if="isLoading">
    <base-spinner />
  </div>
  <div class="coaches" v-else-if="hasCoaches">
    <coach-filter @enableFilters="setFilters" />
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
  <div class="no-coaches" v-else-if="!hasFilteredCoaches || !hasCoaches">
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
      isLoading: false,
      error: false,
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
    async loadCoaches() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('getCoaches');
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
        console.log(this.error);
      }
      this.isLoading = false;
    },
  },
  created() {
    this.loadCoaches();
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

.no-coaches,
.loading-spinner {
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
