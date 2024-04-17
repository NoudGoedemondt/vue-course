const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  watch: {
    result() {
      const that = this;
      setTimeout(function () {
        that.result = 0;
      }, 5000);
      console.log("Watcher fired");
    },
  },
  computed: {
    evaluateResult() {
      if (this.result < 37) {
        return "Not there yet";
      } else if (this.result === 37) {
        return "Right on!";
      }
      return "Too much!";
    },
  },
  methods: {
    add(n) {
      this.result += n;
    },
  },
});

app.mount("#assignment");
