const app = Vue.createApp({
  data() {
    return {
      goals: ["Finish Course", "Learn Vue"],
      goalValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goalValue);
      this.goalValue = "";
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
