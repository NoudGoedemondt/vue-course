<template>
  <div class="coach-registration">
    <coach-form @form-submitted="addNewCoach" />
  </div>
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
      this.$router.replace('/coaches');
      setTimeout(() => {
        this.addCoach(newCoach);
      }, 100);
    },
  },
};
</script>
