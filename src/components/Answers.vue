<template>
  <div>
    <h2>Answers</h2>
    <form>
      <p>{{ question }}</p>
      <ul class="form__answers">
        <li
          class="form__answer form__answer--radio"
          v-for="(answer, i) in answers"
          :key="answer.id"
        >
          <input
            name="answerRadio"
            class="form__answer-radio"
            type="radio"
            :id="i"
            :value="answer.id"
            v-model="chosenAnswer"
          />
          <label class="form__answer-radio-label" :for="i">{{
            answer.text
          }}</label>
        </li>
      </ul>
      <p v-if="answers.length < 2">
        At least two options are needed before a vote can be made
      </p>
      <input
        :class="{ disabled: answers.length < 2 }"
        class="button button-primary form__section-btn"
        value="submit"
        @click.prevent="submitAnswer"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  computed: {
    question() {
      return this.$store.state.question;
    },
    answers() {
      return this.$store.state.answers;
    },
  },
  data: () => ({
    chosenAnswer: {},
  }),
  methods: {
    submitAnswer() {
      var vote = this.answers.find((answer) => answer.id === this.chosenAnswer);
      this.$store.commit("submitAnswer", vote);
    },
  },
};
</script>

<style>
.form__answer--radio {
  align-items: center;
}

.form__answer-radio-label {
  margin-bottom: 0;
}

.form__answer-radio {
  margin-bottom: 0;
  margin-right: 10px;
}
</style>