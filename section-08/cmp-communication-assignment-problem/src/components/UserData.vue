<template>
  <div class="container">
    <div>
      <label>Name:</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Age:</label>
      <input type="number" v-model="age" />
    </div>
    <button @click="updateUser">Submit</button>
  </div>
</template>

<script>
export default {
  emits: ["update-user"],
  data() {
    return {
      name: "",
      age: null,
    };
  },
  methods: {
    updateUser() {
      this.$emit("update-user", this.name, this.age);
    },
  },
};
</script>
