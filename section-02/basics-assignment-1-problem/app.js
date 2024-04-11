const app = Vue.createApp({
  data() {
    return {
      me: { name: "Noud", age: 24 },
      number: Math.random(),
      imgUrl: "./cat.jpg",
    };
  },
  methods: {
    getNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
