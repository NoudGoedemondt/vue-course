<template>
  <div class="coaches-container">
    <coaches-list-item
      v-for="coach in coaches"
      :key="coach.id"
      :id="coach.id"
      :firstName="coach.firstName"
      :lastName="coach.lastName"
      :description="coach.description"
      :rate="coach.rate"
    />
  </div>
</template>

<script>
import CoachesListItem from './CoachesListItem.vue';

export default {
  components: {
    CoachesListItem,
  },
  data() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Noud',
          lastName: 'Goedemondt',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore odio, nemo, temporibus, quae minus magnam blanditiis repellat beatae hic accusamus aperiam eum maxime ab. Ad voluptas accusantium excepturi eius fuga.',
          rate: 49.99,
        },
        {
          id: 'c2',
          firstName: 'Max',
          lastName: 'Schwarz',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore odio, nemo, temporibus, quae minus magnam blanditiis repellat beatae hic accusamus aperiam eum maxime ab. Ad voluptas accusantium excepturi eius fuga.',
          rate: 29.99,
        },
        {
          id: 'c3',
          firstName: 'Henk',
          lastName: 'Spermatank',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore odio, nemo, temporibus, quae minus magnam blanditiis repellat beatae hic accusamus aperiam eum maxime ab. Ad voluptas accusantium excepturi eius fuga.',
          rate: 99.99,
        },
      ],
    };
  },
};
</script>

<style scoped>
.coaches-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
