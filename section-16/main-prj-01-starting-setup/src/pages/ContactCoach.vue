<template>
  <form @submit.prevent="submitMessage">
    <h3>Contact {{ coach.firstName + ' ' + coach.lastName }}</h3>
    <div class="form-control">
      <label for="email">Your email</label>
      <input
        type="email"
        id="email"
        v-model="messageData.email"
        :class="{ invalid: invalidFields.email }"
        @focus="resetFieldValidity('email')"
      />
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea
        id="message"
        rows="5"
        cols="30"
        v-model="messageData.message"
        :class="{ invalid: invalidFields.message }"
        @focus="resetFieldValidity('message')"
      ></textarea>
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
  data() {
    return {
      messageData: {
        email: '',
        message: '',
      },
      invalidFields: {
        email: false,
        message: false,
      },
    };
  },
  computed: {
    ...mapGetters(['getCoachById']),
    coach() {
      return this.getCoachById(this.id);
    },
  },
  methods: {
    resetFieldValidity(field) {
      this.invalidFields[field] = false;
    },
    validateFields() {
      this.invalidFields = {
        email: false,
        message: false,
      };

      if (!this.messageData.email) {
        this.invalidFields.email = true;
      }

      if (!this.messageData.message) {
        this.invalidFields.message = true;
      }

      return Object.values(this.invalidFields).every(
        (field) => field === false
      );
    },
    clearFields() {
      (this.messageData.email = ''), (this.messageData.message = '');
    },
    submitMessage() {
      if (this.validateFields()) {
        console.log('data is good');
        this.clearFields();
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
