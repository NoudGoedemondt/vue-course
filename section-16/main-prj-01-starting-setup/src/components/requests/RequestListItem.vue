<template>
  <div class="request-item">
    <div class="mail-info">
      <b>
        from:
        <span
          ><a :href="emailLink">{{ clientEmail }}</a></span
        >
      </b>
      <p>{{ date + ' ' + time }}</p>
    </div>
    <b>message:</b>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    clientEmail: String,
    message: String,
    dateTime: String,
  },
  computed: {
    emailLink() {
      return 'mailto:' + this.clientEmail;
    },
    dateObject() {
      return new Date(this.dateTime);
    },
    date() {
      return `${this.dateObject.getDay()}-${
        this.dateObject.getMonth() + 1
      }-${this.dateObject.getFullYear()}`;
    },
    time() {
      return `${this.dateObject.getHours()}:${this.dateObject.getMinutes()}`;
    },
  },
};
</script>

<style scoped>
.request-item {
  outline: 1px solid lightgray;
  border-radius: 5px;
  padding: 1rem;
  margin: 0.5rem;
  width: 80vw;
  max-width: 1024px;
}

.mail-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
