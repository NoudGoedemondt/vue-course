const app = Vue.createApp({
  data() {
    return {
      num: 0,
      counter: 30,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    add(n) {
      this.counter += n;
    },
    sub(n) {
      this.counter -= n;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert("Submitted");
    },
  },
});

app.mount("#events");
