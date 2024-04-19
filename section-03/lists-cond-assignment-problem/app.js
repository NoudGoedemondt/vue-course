const app = Vue.createApp({
  data() {
    return {
      tasks: ["Eat breakfast", "Go gym", "Make Lunch"],
      enteredTask: "",
      showTasks: true,
      buttonText: "Hide list",
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
      this.enteredTask = "";
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleTasks() {
      this.showTasks = !this.showTasks;
      this.buttonText = this.showTasks ? "Hide list" : "Show list";
    },
  },
});

app.mount("#assignment");
