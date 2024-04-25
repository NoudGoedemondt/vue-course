<template>
  <li :style="{ backgroundColor: isFavorite ? 'lightpink' : 'white' }">
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">
      {{ isFavorite ? "Unfavorite" : "Favorite" }} friend
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="$emit('delete-friend', id)">Delete Friend</button>
  </li>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    phoneNumber: String,
    emailAddress: String,
    isFavorite: Boolean,
  },
  emits: ["toggle-favorite", "delete-friend"],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
