<template>
  <div class="container">
    <h2>{{ username }}</h2>
    <h3>{{ userage }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    username: String,
    userage: Number,
  },
};
</script>
