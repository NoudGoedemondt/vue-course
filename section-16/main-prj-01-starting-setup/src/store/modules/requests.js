const requests = {
  state() {
    return {
      requests: [
        {
          coachId: 'c1',
          clientEmail: '0947906@hr.nl',
          message:
            'Lorem ipsum dolor sit amet. Aut placeat consequuntur id reiciendis necessitatibus et expedita voluptas ex consectetur provident sit Quis ullam cum tempore sunt. Qui voluptas reprehenderit sit excepturi voluptas qui sunt excepturi et harum quod eum dolorem dolores non adipisci dolorem a delectus sapiente.',
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
