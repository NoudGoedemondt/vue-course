<template>
  <div class="coach-filter">
    <div class="coach-filter-option">
      <label for="frontend">Frontend</label>
      <input type="checkbox" id="frontend" v-model="filters.frontend" />
    </div>
    <div class="coach-filter-option">
      <label for="backend">Backend</label>
      <input type="checkbox" id="backend" v-model="filters.backend" />
    </div>
    <div class="coach-filter-option">
      <label for="career">Career</label>
      <input type="checkbox" id="career" v-model="filters.career" />
    </div>
  </div>
</template>

<script>
export default {
  emits: ['enableFilters'],
  data() {
    return {
      filters: {
        frontend: false,
        backend: false,
        career: false,
      },
    };
  },
  computed: {
    activeFilters() {
      return Object.keys(this.filters).filter((area) => this.filters[area]);
    },
  },
  watch: {
    filters: {
      handler() {
        this.$emit('enableFilters', this.activeFilters);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.coach-filter {
  outline: 1px solid lightgray;
  border-radius: 5px;
  padding: 1rem;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  width: 80vw;
  max-width: 1042px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.coach-filter-option {
  display: inline-block;
  margin: 0 1rem;
}

.coach-filter-option label {
  font-weight: bold;
}
</style>
