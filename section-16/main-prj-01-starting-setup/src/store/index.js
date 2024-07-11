import { createStore } from 'vuex';
import requests from './modules/requests';
import coaches from './modules/coaches';

const store = createStore({
  modules: { requests, coaches },
  state() {
    return {
      userId: null,
      userEmail: null,
      token: null,
      tokenExpiration: null,
    };
  },
  getters: {
    hasUserId(state) {
      return state.userId && state.userId.length > 0;
    },
  },
  mutations: {
    SET_USER(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.userEmail = payload.email;
      state.tokenExpiration = payload.tokenExpiration;
    },
  },
  actions: {
    async signUp(context, payload) {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBXwRPVa7jqldAFJhhnZpN874B6mLQds9U',
        {
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.message || 'Failed to authenticate'
        );
        throw error;
      }

      context.commit('SET_USER', {
        token: responseData.IdToken,
        userId: responseData.localId,
        email: responseData.email,
        tokenExpiration: responseData.expiresIn,
      });
    },
    async logIn(context, payload) {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBXwRPVa7jqldAFJhhnZpN874B6mLQds9U',
        {
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to log in');
        throw error;
      }

      context.commit('SET_USER', {
        token: responseData.IdToken,
        userId: responseData.localId,
        email: responseData.email,
        tokenExpiration: responseData.expiresIn,
      });
    },
  },
});

export default store;
