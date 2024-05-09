<template>
  <ul>
    <li :class="{ selected: modelValue === 'poor' }">
      <button type="button" @click="registerScore('poor')">Poor</button>
    </li>
    <li :class="{ selected: modelValue === 'average' }">
      <button type="button" @click="registerScore('average')">Average</button>
    </li>
    <li :class="{ selected: modelValue === 'great' }">
      <button type="button" @click="registerScore('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  // data() {
  //   return {
  //     score: this.modelValue,
  //   };
  // },
  methods: {
    registerScore(score) {
      //this.score = score;
      this.$emit('update:modelValue', score);
    },
  },
};
</script>

<style scoped>
.selected {
  background-color: rgba(211, 211, 211, 0.304);
}
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
