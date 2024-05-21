<template>
  <div v-if="visible" class="popup" :class="{ 'popup-out': closing }">
    <button class="close-button" @click="closePopup">&times;</button>
    <div class="slot-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  data() {
    return {
      visible: true,
      closing: false,
    };
  },
  methods: {
    closePopup() {
      this.closing = true;
      setTimeout(() => {
        this.visible = false;
        this.$emit('close');
      }, 300); // Duration of the out animation
    },
  },
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
  animation: popup-in 0.3s ease-in forwards;
}

.popup-out {
  animation: popup-out 0.3s ease-out forwards;
}

@keyframes popup-in {
  0% {
    transform: translateX(200px);
  }
  30% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes popup-out {
  0% {
    transform: translateX(0px);
  }
  30% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(200px);
  }
}
</style>
