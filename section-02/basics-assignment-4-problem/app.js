const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      classes: { user1: false, user2: false, hidden: false },
      bgColor: "",
    };
  },
  methods: {
    checkUserInput() {
      if (this.userInput === "user1") {
        this.classes = { user1: true, user2: false };
      } else if (this.userInput === "user2") {
        this.classes = { user1: false, user2: true };
      } else {
        this.classes = { user1: false, user2: false };
      }
    },
    toggleParagraph() {
      this.classes.hidden = !this.classes.hidden;
    },
    changeBgColor(event) {
      this.bgColor = event.target.value;
    },
  },
});

app.mount("#assignment");
