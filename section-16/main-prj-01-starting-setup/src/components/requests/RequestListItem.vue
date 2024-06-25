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
    date() {
      return this.dateTime.split('T')[0];
    },
    time() {
      const timePart = this.dateTime.split('T')[1].split('Z')[0];
      const [hours, minutes] = timePart.split(':');
      return `${hours}:${minutes}`;
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
