const requests = {
  state() {
    return {
      requests: [],
    };
  },
  getters: {
    hasRequests(state) {
      return state.requests && state.requests.length > 0;
    },
    currentRequests(state) {
      return state.requests;
    },
  },
  mutations: {
    ADD_REQUEST(state, requestData) {
      state.requests.unshift(requestData);
    },
    SET_REQUESTS(state, requests) {
      state.requests = requests;
    },
  },
  actions: {
    async addRequest(context, requestData) {
      const newRequest = {
        clientEmail: requestData.clientEmail,
        dateTime: requestData.dateTime,
        message: requestData.message,
      };

      const response = await fetch(
        `https://vue-course-db-9d875-default-rtdb.europe-west1.firebasedatabase.app/requests/${requestData.coachId}.json`,
        {
          method: 'POST',
          body: JSON.stringify(newRequest),
        }
      );

      const responseData = await response.json();

      requestData.id = responseData.name;

      if (!response.ok) {
        //error
      }

      context.commit('ADD_REQUEST', requestData);
    },
    async getRequests(context) {
      const registeredId = context.rootState.userId;

      if (!registeredId) {
        console.error('No user ID set');
        return;
      }

      const response = await fetch(
        `https://vue-course-db-9d875-default-rtdb.europe-west1.firebasedatabase.app/requests/${registeredId}.json`
      );
      const requestRecords = await response.json();

      if (!response.ok) {
        //error
      }

      const parsedRequests = Object.keys(requestRecords).map((requestId) => ({
        requestId: requestId,
        clientEmail: requestRecords[requestId].clientEmail,
        dateTime: requestRecords[requestId].dateTime,
        message: requestRecords[requestId].message,
      }));

      context.commit('SET_REQUESTS', parsedRequests);
    },
  },
};

export default requests;
