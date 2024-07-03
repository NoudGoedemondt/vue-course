<template>
  <div class="requests" v-if="hasRequests && hasUserId">
    <request-list-item
      v-for="request in filteredRequests"
      :key="request.dateTime"
      :clientEmail="request.clientEmail"
      :message="request.message"
      :dateTime="request.dateTime"
    />
  </div>
  <div class="no-requests" v-if="!userHasRequests && hasUserId">
    <h3>You haven't received any requests yet...</h3>
  </div>
  <div class="not-registered" v-if="!hasUserId">
    <h3>
      Please
      <span><router-link to="/register">register</router-link></span>
      to receive requests...
    </h3>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
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
    ...mapGetters(['getRequestsById', 'hasRequests', 'hasUserId']),
    ...mapState(['userId']),
    filteredRequests() {
      return this.getRequestsById(this.userId);
    },
    userHasRequests() {
      return this.hasRequests(this.userId);
    },
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
