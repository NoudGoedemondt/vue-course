<template>
  <transition name="popup">
    <div class="popup" v-if="open">
      <button class="close-button" @click="$emit('close')">&times;</button>
      <div class="slot-wrapper">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['open'],
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
  margin-right: 1rem;
}
.popup {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  margin-top: 2rem;
  margin-right: 1rem;
  border-radius: 15px;
  background-color: #810032;
  color: white;
}
.popup-enter-from,
.popup-leave-to {
  transform: translateX(200px);
}
.popup-enter-active,
.popup-leave-active {
  transition: all 0.4s ease-in-out;
}
.popup-enter-to,
.popup-leave-from {
  transform: translateX(0);
}
</style>
