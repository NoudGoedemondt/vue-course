const app = Vue.createApp({
  data() {
    return {
      courseGoals: ["Learn Vue", "Learn Next", "Learn React"],
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    randomOutput() {
      if (Math.random() < 0.5) {
        return this.courseGoals[0];
      } else {
        return this.courseGoals[1];
      }
    },
  },
});

app.mount("#user-goal");
