const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      //fullname: "",
    };
  },
  watch: {
    /*
    name(value) {
      if (value == "") {
        return (this.fullname = "");
      }
      return (this.fullname = value + " " + "Goedemondt");
    },
    */
  },
  computed: {
    fullname() {
      console.log("running again");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetName() {
      this.name = "";
    },
  },
});

app.mount("#events");
