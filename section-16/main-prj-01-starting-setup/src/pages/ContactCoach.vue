<template>
  <form @submit.prevent="">
    <h3>Contact a Coach</h3>
    <div class="form-control">
      <label for="email">Your Email</label>
      <input type="email" id="email" />
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea id="message" rows="4" cols="30"></textarea>
    </div>
    <div class="form-control send-button">
      <base-button>Send</base-button>
    </div>
  </form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    id: String,
  },
  computed: {
    ...mapGetters(['getCoachById']),
    coach() {
      return this.getCoachById(this.id);
    },
  },
};
</script>

<style scoped>
form {
  outline: 1px solid lightgray;
  border-radius: 5px;
  padding: 1rem;
  margin: 0.5rem auto;
  width: 60vw;
  max-width: 768px;
  text-align: center;
}

.form-control {
  display: flex;
  justify-content: space-between;
  margin: 1rem 10%;
}

.form-control label {
  font-weight: bold;
  margin-right: 1rem;
}

.form-control input,
.form-control textarea {
  border: solid 1px black;
  border-radius: 3px;
}

.send-button {
  justify-content: center;
}
</style>
