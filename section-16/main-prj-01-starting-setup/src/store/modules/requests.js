const requests = {
  state() {
    return {
      requests: [
        {
          coachId: 'c1',
          clientEmail: '0947906@hr.nl',
          message: 'Hallo help me',
          dateTime: '2024-06-24T14:55:43.301Z',
        },
        {
          coachId: 'c1',
          clientEmail: '0947906@hr.nl',
          message: 'Hallo help me',
          dateTime: '2024-06-24T14:55:43.301Z',
        },
        {
          coachId: 'c1',
          clientEmail: '0947906@hr.nl',
          message: 'Hallo help me',
          dateTime: '2024-06-24T14:55:43.301Z',
        },
        {
          coachId: 'c2',
          clientEmail: '0947906@hr.nl',
          message: 'Hallo help me',
          dateTime: '2024-06-24T14:55:43.301Z',
        },
        {
          coachId: 'c2',
          clientEmail: '0947906@hr.nl',
          message: 'Hallo help me',
          dateTime: '2024-06-24T14:55:43.301Z',
        },
        {
          coachId: 'c3',
          clientEmail: '0947906@hr.nl',
          message: 'Hallo help me',
          dateTime: '2024-06-24T14:55:43.301Z',
        },
      ],
    };
  },
  getters: {
    getRequestsById: (state) => (id) => {
      return state.requests.filter((request) => request.coachId === id);
    },
    hasRequests: (state) => (id) => {
      return state.requests.some((request) => request.coachId === id);
    },
  },
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
