<template>
  <transition name="backdrop">
    <div v-if="open" class="backdrop" @click="$emit('close')"></div>
  </transition>
  <transition name="modal">
    <dialog open v-if="open">
      <slot></slot>
    </dialog>
  </transition>
</template>

<script>
export default {
  props: ['open'],
  emits: ['close'],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
}

.modal-enter-active,
.modal-leave-active {
  animation: modal 0.3s ease-out;
}
.modal-leave-active {
  animation-direction: reverse;
}

.backdrop-enter-active,
.backdrop-leave-active {
  animation: backdrop 0.3s ease;
}
.backdrop-leave-active {
  animation-direction: reverse;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-100px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
}

@keyframes backdrop {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
