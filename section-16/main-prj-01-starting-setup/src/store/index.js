import { createStore } from 'vuex';
import requests from './modules/requests';

const store = createStore({
  modules: { requests },
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Noud',
          lastName: 'Goedemondt',
          areas: ['backend', 'career'],
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore odio, nemo, temporibus, quae minus magnam blanditiis repellat beatae hic accusamus aperiam eum maxime ab. Ad voluptas accusantium excepturi eius fuga.',
          rate: 49.99,
        },
        {
          id: 'c2',
          firstName: 'Max',
          lastName: 'Schwarz',
          areas: ['frontend', 'career'],
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore odio, nemo, temporibus, quae minus magnam blanditiis repellat beatae hic accusamus aperiam eum maxime ab. Ad voluptas accusantium excepturi eius fuga.',
          rate: 29.99,
        },
        {
          id: 'c3',
          firstName: 'Henk',
          lastName: 'Janse',
          areas: ['frontend', 'backend'],
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore odio, nemo, temporibus, quae minus magnam blanditiis repellat beatae hic accusamus aperiam eum maxime ab. Ad voluptas accusantium excepturi eius fuga.',
          rate: 99.99,
        },
        {
          id: 'c4',
          firstName: 'John',
          lastName: 'Doe',
          areas: ['frontend', 'career'],
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore odio, nemo, temporibus, quae minus magnam blanditiis repellat beatae hic accusamus aperiam eum maxime ab. Ad voluptas accusantium excepturi eius fuga.',
          rate: 19.99,
        },
        {
          id: 'c5',
          firstName: 'Jane',
          lastName: 'Johnson',
          areas: ['frontend'],
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore odio, nemo, temporibus, quae minus magnam blanditiis repellat beatae hic accusamus aperiam eum maxime ab. Ad voluptas accusantium excepturi eius fuga.',
          rate: 19.99,
        },
      ],
      userId: '',
    };
  },
  getters: {
    hasCoaches(state) {
      return state.coaches && state.coaches.length > 0;
    },
    getCoachById: (state) => (id) => {
      return state.coaches.find((coach) => coach.id === id);
    },
    filteredCoaches: (state) => (selectedAreas) => {
      return state.coaches.filter((coach) =>
        selectedAreas.every((area) => coach.areas.includes(area))
      );
    },
    hasUserId(state) {
      return state.userId !== '';
    },
  },
  mutations: {
    ADD_COACH(state, coachData) {
      state.coaches.unshift(coachData);
      state.userId = coachData.id;
    },
  },
  actions: {
    addCoach(context, coachData) {
      context.commit('ADD_COACH', coachData);
    },
  },
});

export default store;
