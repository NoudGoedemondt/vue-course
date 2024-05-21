<template>
  <div class="popup">
    <button class="close-button" @click="$emit('close')">&times;</button>
    <div class="slot-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['close'],
};
</script>

<style scoped>
button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: 30px;
  margin: 0 1rem;
}

.slot-wrapper {
  margin: 0 1rem;
}

.popup {
  display: flex;
  align-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  margin-top: 2rem;
  margin-right: 1rem;
  border-radius: 15px;
  background-color: lightgray;
  max-width: 200px;
}
</style>
