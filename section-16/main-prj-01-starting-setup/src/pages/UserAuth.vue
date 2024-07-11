<template>
  <div class="user-auth">
    <base-spinner v-if="isLoading" />
    <form @submit.prevent="submitForm" v-else>
      <div class="form-control">
        <label for="email">E-mail</label>
        <input
          type="email"
          id="email"
          v-model.trim="formData.email"
          :class="{ invalid: invalidFields.email }"
          @focus="resetValidity('email')"
        />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model.trim="formData.password"
          :class="{ invalid: invalidFields.password }"
          @focus="resetValidity('password')"
        />
      </div>
      <div class="form-control login-button">
        <base-button>{{ captions.button }}</base-button>
      </div>
      <div class="form-control signup-link">
        <a @click="switchMode">{{ captions.link }}</a>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
      invalidFields: {
        email: false,
        password: false,
      },
      mode: 'logIn',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    captions() {
      if (this.mode === 'logIn') {
        return { button: 'Log in', link: 'No account? Sign up instead' };
      } else {
        return { button: 'Sign up', link: 'Already have an account? Log in' };
      }
    },
  },
  methods: {
    resetValidity(field) {
      this.invalidFields[field] = false;
    },
    validateForm() {
      this.invalidFields = {
        email: false,
        password: false,
      };

      if (!this.formData.email) {
        this.invalidFields.email = true;
      }

      if (!this.formData.password || this.formData.password.length < 6) {
        this.invalidFields.password = true;
      }

      return Object.values(this.invalidFields).every(
        (field) => field === false
      );
    },
    ...mapActions(['signUp', 'logIn']),
    async submitForm() {
      this.error = null;

      if (!this.validateForm()) {
        return;
      }

      this.isLoading = true;

      try {
        if (this.mode === 'logIn') {
          await this.logIn({ ...this.formData });
        } else {
          await this.signUp({ ...this.formData });
        }
      } catch (err) {
        this.error = err.message || 'Failed to authenticate user!';
        console.log(this.error);
      }

      this.isLoading = false;

      if (!this.error) {
        this.$router.replace('/coaches');
      }
    },
    switchMode() {
      if (this.mode === 'logIn') {
        this.mode = 'signUp';
      } else {
        this.mode = 'logIn';
      }
    },
  },
};
</script>

<style scoped>
.user-auth {
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

.form-control input {
  border: solid 1px black;
  border-radius: 3px;
}

.login-button,
.signup-link {
  justify-content: center;
}

a {
  cursor: pointer;
  text-decoration: underline;
  color: blue;
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
