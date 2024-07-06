<template>
  <div class="requests-received">
    <div class="requests" v-if="hasRequests && hasUserId">
      <request-list-item
        v-for="request in currentRequests"
        :key="request.requestId"
        :clientEmail="request.clientEmail"
        :message="request.message"
        :dateTime="request.dateTime"
      />
    </div>
    <div class="no-requests" v-else-if="!hasRequests && hasUserId">
      <h3>You haven't received any requests yet...</h3>
    </div>
    <div class="not-registered" v-else-if="!hasUserId">
      <h3>
        Please
        <span><router-link to="/register">register</router-link></span>
        to receive requests...
      </h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import RequestListItem from '../components/requests/RequestListItem.vue';

export default {
  components: {
    RequestListItem,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters(['hasRequests', 'hasUserId', 'currentRequests']),
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('getRequests');
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
        console.log(this.error);
      }
      this.isLoading = false;
    },
  },
  created() {
    this.loadRequests();
  },
};
</script>

<style scoped>
.requests,
.no-requests,
.not-registered {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.no-requests,
.not-registered {
  margin-top: 2rem;
}
</style>
