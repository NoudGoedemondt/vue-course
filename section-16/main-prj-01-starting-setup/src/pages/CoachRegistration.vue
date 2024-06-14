<template>
  <coach-form @form-submitted="addNewCoach" />
</template>

<script>
import CoachForm from '../components/coaches/CoachForm.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    CoachForm,
  },
  methods: {
    ...mapActions(['addCoach']),
    addNewCoach(newCoach) {
      this.addCoach(newCoach);
    },
  },
};
</script>

<style scoped></style>
