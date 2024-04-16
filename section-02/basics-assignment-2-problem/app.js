const app = Vue.createApp({
  data() {
    return {
      out: "",
      confirmedOut: "",
    };
  },
  methods: {
    showAlert() {
      alert("Alert!");
    },
    showOutput(event) {
      this.out = event.target.value;
    },
    confirmOutput() {
      this.confirmedOut = this.out;
    },
  },
});

app.mount("#assignment");
