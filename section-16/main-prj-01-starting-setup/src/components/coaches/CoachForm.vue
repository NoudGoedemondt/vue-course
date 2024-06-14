<template>
  <form @submit.prevent="submitForm">
    <h3>Register as a Coach</h3>
    <div class="form-control">
      <label for="firstName">First name</label>
      <input
        type="text"
        id="firstName"
        v-model.trim="coachRegistration.firstName"
      />
    </div>
    <div class="form-control">
      <label for="lastName">Last name</label>
      <input
        type="text"
        id="lastName"
        v-model.trim="coachRegistration.lastName"
      />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="4"
        cols="30"
        v-model.trim="coachRegistration.description"
      ></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Rate</label>
      <input
        type="number"
        id="rate"
        min="0.01"
        step="0.01"
        max="1000"
        v-model.trim="coachRegistration.rate"
      />
    </div>
    <div class="form-control expertises">
      <div class="form-control-group">
        <label for="frontend">Frontend</label>
        <input
          id="frontend"
          type="checkbox"
          value="frontend"
          v-model="coachRegistration.areas"
        />
      </div>
      <div class="form-control-group">
        <label for="backend">Backend</label>
        <input
          id="backend"
          type="checkbox"
          value="backend"
          v-model="coachRegistration.areas"
        />
      </div>
      <div class="form-control-group">
        <label for="career">Career</label>
        <input
          id="career"
          type="checkbox"
          value="career"
          v-model="coachRegistration.areas"
        />
      </div>
    </div>
    <div class="form-control submit-button">
      <base-button>Submit</base-button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['form-submitted'],
  data() {
    return {
      coachRegistration: {
        id: Date.now().toString(),
        firstName: '',
        lastName: '',
        areas: [],
        description: '',
        rate: null,
      },
    };
  },
  methods: {
    clearForm() {
      (this.coachRegistration.id = ''),
        (this.coachRegistration.firstName = ''),
        (this.coachRegistration.lastName = ''),
        (this.coachRegistration.areas = []),
        (this.coachRegistration.description = ''),
        (this.coachRegistration.rate = null);
    },
    submitForm() {
      this.$emit('form-submitted', { ...this.coachRegistration });
      this.clearForm();
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

.expertises {
  justify-content: start;
  flex-wrap: wrap;
}

.form-control-group {
  margin-right: 1rem;
}

.submit-button {
  justify-content: center;
}
</style>
