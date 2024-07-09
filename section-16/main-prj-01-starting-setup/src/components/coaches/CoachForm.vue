<template>
  <form @submit.prevent="submitForm">
    <h3>Register as a Coach</h3>
    <div class="form-control">
      <label for="firstName">First name</label>
      <input
        type="text"
        id="firstName"
        v-model.trim="coachRegistration.firstName"
        :class="{ invalid: invalidFields.firstName }"
        @focus="resetValidity('firstName')"
      />
    </div>
    <div class="form-control">
      <label for="lastName">Last name</label>
      <input
        type="text"
        id="lastName"
        v-model.trim="coachRegistration.lastName"
        :class="{ invalid: invalidFields.lastName }"
        @focus="resetValidity('lastName')"
      />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="4"
        cols="30"
        v-model.trim="coachRegistration.description"
        :class="{ invalid: invalidFields.description }"
        @focus="resetValidity('description')"
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
        :class="{ invalid: invalidFields.rate }"
        @focus="resetValidity('rate')"
      />
    </div>
    <div
      class="form-control expertises"
      :class="{ invalid: invalidFields.areas }"
    >
      <div class="form-control-group">
        <label for="frontend">Frontend</label>
        <input
          id="frontend"
          type="checkbox"
          value="frontend"
          v-model="coachRegistration.areas"
          @focus="resetValidity('areas')"
        />
      </div>
      <div class="form-control-group">
        <label for="backend">Backend</label>
        <input
          id="backend"
          type="checkbox"
          value="backend"
          v-model="coachRegistration.areas"
          @focus="resetValidity('areas')"
        />
      </div>
      <div class="form-control-group">
        <label for="career">Career</label>
        <input
          id="career"
          type="checkbox"
          value="career"
          v-model="coachRegistration.areas"
          @focus="resetValidity('areas')"
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
      invalidFields: {
        firstName: false,
        lastName: false,
        description: false,
        rate: false,
        areas: false,
      },
    };
  },
  methods: {
    resetValidity(field) {
      this.invalidFields[field] = false;
    },
    validateForm() {
      this.invalidFields = {
        firstName: false,
        lastName: false,
        description: false,
        rate: false,
        areas: false,
      };

      if (!this.coachRegistration.firstName) {
        this.invalidFields.firstName = true;
      }

      if (!this.coachRegistration.lastName) {
        this.invalidFields.lastName = true;
      }

      if (!this.coachRegistration.description) {
        this.invalidFields.description = true;
      }

      if (
        !this.coachRegistration.rate ||
        this.coachRegistration.rate < 0 ||
        this.coachRegistration.rate > 1000
      ) {
        this.invalidFields.rate = true;
      }

      if (this.coachRegistration.areas.length === 0) {
        this.invalidFields.areas = true;
      }

      return Object.values(this.invalidFields).every(
        (field) => field === false
      );
    },
    clearForm() {
      (this.coachRegistration.id = ''),
        (this.coachRegistration.firstName = ''),
        (this.coachRegistration.lastName = ''),
        (this.coachRegistration.areas = []),
        (this.coachRegistration.description = ''),
        (this.coachRegistration.rate = null);
    },
    submitForm() {
      if (this.validateForm()) {
        const validatedCoachRegistration = {
          ...this.coachRegistration,
          areas: [...this.coachRegistration.areas].sort(),
        };
        this.$emit('form-submitted', validatedCoachRegistration);
        this.clearForm();
      }
    },
  },
};
</script>

<style scoped>
form {
  outline: 1px solid lightgray;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem auto;
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

.expertises {
  justify-content: center;
  flex-wrap: wrap;
}

.form-control-group {
  margin-right: 1rem;
}

.submit-button {
  justify-content: center;
}

.invalid {
  animation: blink 0.5s ease-in-out forwards;
}

@keyframes blink {
  0%,
  66% {
    border: solid 1px black;
    background: transparent;
  }
  33%,
  100% {
    border: solid 1px red;
    background: rgba(255, 0, 0, 0.1);
  }
}
</style>
