const coaches = {
  state() {
    return {
      coaches: [],
      lastFetch: null,
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
    shouldUpdate(state) {
      const lastFetch = state.lastFetch;
      if (!lastFetch) {
        return true;
      }
      const currentTime = new Date().getTime();
      return (currentTime - lastFetch) / 1000 > 60;
    },
  },
  mutations: {
    ADD_COACH(state, coachData) {
      state.coaches.unshift(coachData);
    },
    SET_COACHES(state, coaches) {
      state.coaches = coaches;
    },
    CLEAR_COACHES(state) {
      state.coaches = [];
    },
    SET_FETCH_TIMESTAMP(state) {
      state.lastFetch = new Date().getTime();
    },
  },
  actions: {
    async addCoach(context, coachData) {
      const id = context.rootState.userId;
      const token = context.rootState.token;

      const response = await fetch(
        `https://vue-course-db-9d875-default-rtdb.europe-west1.firebasedatabase.app/coaches/${id}.json?auth=${token}`,
        {
          method: 'PUT',
          body: JSON.stringify(coachData),
        }
      );

      if (!response.ok) {
        //error
      }

      context.commit('ADD_COACH', { id: id, ...coachData });
    },
    async getCoaches(context) {
      if (!context.getters.shouldUpdate) {
        return;
      }

      const response = await fetch(
        'https://vue-course-db-9d875-default-rtdb.europe-west1.firebasedatabase.app/coaches.json'
      );
      const coachRecords = await response.json();

      if (!response.ok) {
        //error
      }

      const parsedCoaches = Object.keys(coachRecords).map((id) => ({
        id: id,
        firstName: coachRecords[id].firstName,
        lastName: coachRecords[id].lastName,
        areas: coachRecords[id].areas,
        description: coachRecords[id].description,
        rate: coachRecords[id].rate,
      }));

      context.commit('SET_COACHES', parsedCoaches);
      context.commit('SET_FETCH_TIMESTAMP');
    },
  },
};

export default coaches;
