const requests = {
  state() {
    return {
      requests: [],
    };
  },
  getters: {},
  mutations: {
    ADD_REQUEST(state, requestData) {
      state.requests.unshift(requestData);
    },
  },
  actions: {
    addRequest(context, requestData) {
      context.commit('ADD_REQUEST', requestData);
    },
  },
};

export default requests;
