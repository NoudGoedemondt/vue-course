<template>
  <base-dialog v-if="showDialog" title="Invalid Input" @close="closeDialog">
    <template #default>
      <p>Unfortunately, at least one input value is invalid.</p>
      <p>Please check the input fields for errors.</p>
    </template>
    <template #actions>
      <base-button @click="closeDialog">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitResource">
      <div class="form-control">
        <label for="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          v-model="newResource.title"
        />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          v-model="newResource.description"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" v-model="newResource.link" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  emits: ['resource-added'],
  data() {
    return {
      newResource: {
        id: '',
        title: '',
        description: '',
        link: '',
      },
      showDialog: false,
    };
  },
  methods: {
    submitResource() {
      if (
        this.newResource.title === '' ||
        this.newResource.description === '' ||
        this.newResource.link === ''
      ) {
        this.showDialog = true;
        return;
      }

      this.$emit('resource-added', this.newResource);
      this.newResource = {
        id: '',
        title: '',
        description: '',
        link: '',
      };
    },
    closeDialog() {
      this.showDialog = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
