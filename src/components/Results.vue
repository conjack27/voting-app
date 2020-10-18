<template>
  <div class="graph">
    <h2>Results</h2>
    <p>{{ question }}</p>
    <column-chart :data="graphData"></column-chart>
  </div>
</template>

<script>
export default {
  name: "Graph",
  components: {},
  mounted() {},
  computed: {
    question() {
      return this.$store.state.question;
    },
    yAxis() {
      return this.$store.state.answers.map((x) => x.votes);
    },
    graphData() {
      return this.$store.state.answers.map((item) => {
        return [item.text, item.votes];
      });
    },
  },
  data: () => ({
    chartData: [],
  }),
};
</script>

<style lang="scss">
</style>
