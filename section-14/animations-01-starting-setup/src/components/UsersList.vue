<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user.id" @click="removeUser(user.id)">
      <h3>{{ user.firstname + ' ' + user.lastname }}</h3>
      <p>{{ user.position }}</p>
    </li>
  </transition-group>
  <form @submit.prevent="addUser">
    <div class="form-group">
      <label for="firstname">Name:</label>
      <input type="text" id="firstname" v-model="firstname" required />
    </div>
    <div class="form-group">
      <label for="lastname">Surname:</label>
      <input type="text" id="lastname" v-model="lastname" required />
    </div>
    <div class="form-group">
      <label for="position">Position:</label>
      <input type="text" id="position" v-model="position" required />
    </div>
    <div class="button-container">
      <button>Add Employee</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      position: '',
      users: [
        {
          id: 1,
          firstname: 'John',
          lastname: 'Doe',
          position: 'Software Engineer',
        },
        {
          id: 2,
          firstname: 'Jane',
          lastname: 'Smith',
          position: 'Product Manager',
        },
        {
          id: 3,
          firstname: 'Michael',
          lastname: 'Johnson',
          position: 'UX Designer',
        },
        {
          id: 4,
          firstname: 'Emily',
          lastname: 'Davis',
          position: 'Data Scientist',
        },
        {
          id: 5,
          firstname: 'David',
          lastname: 'Miller',
          position: 'DevOps Engineer',
        },
      ],
    };
  },
  methods: {
    addUser() {
      const newUser = {
        id: Date.now(),
        firstname: this.firstname,
        lastname: this.lastname,
        position: this.position,
      };
      this.users.unshift(newUser);

      this.firstname = '';
      this.lastname = '';
      this.position = '';
    },
    removeUser(id) {
      this.users = this.users.filter((user) => user.id !== id);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  outline: 1px auto lightgray;
  padding: 1rem;
  margin: 0.5rem;
  text-align: center;
}

form {
  width: 50%;
  outline: 1px auto lightgray;
  padding: 1rem;
}

div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

input {
  margin: 0;
}
.form-group {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-container {
  display: flex;
  justify-content: center;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.user-list-enter-active {
  transition: all 1s ease-in;
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  scale: 1;
}

.user-list-leave-active {
  transition: all 1s ease-out;
}

.user-list-leave-to {
  opacity: 0;
  scale: 0;
}

.user-list-move {
  transition: transform 1s ease;
}
</style>
