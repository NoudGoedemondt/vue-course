<template>
  <base-card>
    <ul>
      <li v-for="(goal, index) in goals" :key="goal">
        <slot :goal="goal" :index="index"></slot>
      </li>
    </ul>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Finish course", "Master Vue"],
    };
  },
};
</script>

<style scoped>
ul {
  text-align: center;
  list-style-type: none;
  margin: 0;
  padding: 0dvb;
}
</style>
