<template>
  <div>
    <h3>Manage goals</h3>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="#app">
      <error-alert v-if="showError" @close-error="confirmError">
        <h3>Error!</h3>
        <p>Please enter valid text in the input field</p>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showError: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.showError = true;
      }
    },
    confirmError() {
      this.showError = false;
    },
  },
};
</script>
