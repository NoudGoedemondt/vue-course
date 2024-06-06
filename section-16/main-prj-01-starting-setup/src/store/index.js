import { createStore } from 'vuex';

const store = createStore({
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
          areas: ['frontend', 'backend', 'career'],
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore odio, nemo, temporibus, quae minus magnam blanditiis repellat beatae hic accusamus aperiam eum maxime ab. Ad voluptas accusantium excepturi eius fuga.',
          rate: 99.99,
        },
      ],
    };
  },
  getters: {
    hasCoaches(state) {
      return state.coaches && state.coaches.length > 0;
    },
  },
});

export default store;
