<template>
  <div id="app" class="container main-container">
    <div class="row">
      <div class="four columns main-container__column"><Questions /></div>
      <div class="four columns main-container__column"><Answers /></div>
      <div class="four columns main-container__column"><Results /></div>
    </div>
  </div>
</template>

<script>
import store from "./store/store";
import Results from "./components/Results.vue";
import Answers from "./components/Answers.vue";
import Questions from "./components/Questions.vue";

export default {
  name: "App",
  store,
  components: {
    Results,
    Answers,
    Questions,
  },
};
</script>

<style lang='scss'>
@import "./assets/css/normalize.css";
@import "./assets/css/skeleton.css";

.main-container {
  border: 1px solid black;
  margin-top: 20px;
}

.main-container__column {
  @media (max-width: 750px) {
    border: 1px solid black;
    min-width: 100%;
    margin-left: 0;
  }
  padding: 10px;
}
</style>
