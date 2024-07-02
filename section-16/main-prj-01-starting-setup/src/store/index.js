import { createStore } from 'vuex';
import requests from './modules/requests';
import coaches from './modules/coaches';

const store = createStore({
  modules: { requests, coaches },
  state() {
    return {
      userId: '',
    };
  },
  getters: {
    hasUserId(state) {
      return state.userId !== '';
    },
  },
  mutations: {
    SET_USER_ID(state, coachId) {
      state.userId = coachId;
    },
  },
  actions: {
    setUserId(context, payload) {
      context.commit('SET_USER_ID', payload);
    },
  },
});

export default store;
