import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    SET_LOGGED_IN(state, status) {
      state.isLoggedIn = status;
    },
  },
  actions: {
    logIn(context) {
      context.commit('SET_LOGGED_IN', true);
    },
    logOut(context) {
      context.commit('SET_LOGGED_IN', false);
    },
  },
});

export default store;
