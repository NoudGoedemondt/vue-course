const coaches = {
  state() {
    return {
      coaches: [],
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
  },
  mutations: {
    ADD_COACH(state, coachData) {
      state.coaches.unshift(coachData);
    },
    SET_COACHES(state, coaches) {
      state.coaches = coaches;
    },
  },
  actions: {
    async addCoach(context, coachData) {
      const { id, ...coachDataWithoutId } = coachData;

      const response = await fetch(
        `https://vue-course-db-9d875-default-rtdb.europe-west1.firebasedatabase.app/coaches/${id}.json`,
        {
          method: 'PUT',
          body: JSON.stringify(coachDataWithoutId),
        }
      );

      if (!response.ok) {
        //error
      }

      context.commit('ADD_COACH', coachData);
      context.commit('SET_USER_ID', coachData.id, { root: true });
    },
    async getCoaches(context) {
      const response = await fetch(
        'https://vue-course-db-9d875-default-rtdb.europe-west1.firebasedatabase.app/coaches.json'
      );
      const coachRecords = await response.json();

      if (!response.ok) {
        //error
      }

      const coaches = Object.keys(coachRecords).map((id) => ({
        id: id,
        firstName: coachRecords[id].firstName,
        lastName: coachRecords[id].lastName,
        areas: coachRecords[id].areas,
        description: coachRecords[id].description,
        rate: coachRecords[id].rate,
      }));

      context.commit('SET_COACHES', coaches);
    },
  },
};

export default coaches;
