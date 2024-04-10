const app = Vue.createApp({
  data() {
    return {
      courseGoals: ["Learn Vue", "Learn Next", "Learn React"],
    };
  },
});

app.mount("#user-goal");
