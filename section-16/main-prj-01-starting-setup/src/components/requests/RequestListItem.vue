<template>
  <div class="request-item">
    <h2>{{ clientEmail }}</h2>
    <p>{{ message }}</p>
    <p>{{ dateTime }}</p>
  </div>
</template>

<script>
export default {
  props: {
    coachId: String,
    clientEmail: String,
    message: String,
    dateTime: String,
  },
};
</script>

<style scoped>
.request-item {
  outline: 1px solid lightgray;
  border-radius: 5px;
  padding: 1rem;
  margin: 0.5rem;
  width: 80vw;
  max-width: 1024px;
}
</style>
