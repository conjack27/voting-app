<template>
  <div class="classname">
    <h2>Questions</h2>

    <form>
      <div class="form__section">
        <label class="form__section-label" for="question">Question</label>
        <ValidationProvider
          class="form__input-wrapper"
          rules="max:80"
          v-slot="{ errors, invalid }"
        >
          <input
            class="u-full-width"
            type="text"
            :disabled="invalid"
            v-model="question"
            id="question"
          />
          <span class="form__error">{{ errors[0] }}</span>
          <span
            @click="resetQuestion()"
            v-if="invalid"
            class="form__answer-reset"
            >Reset</span
          >
        </ValidationProvider>
      </div>
      <ul class="form__answers">
        <label>Potential Answers</label>
        <li class="form__answer" v-for="answer in answers" :key="answer.id">
          <ValidationProvider
            class="form__input-wrapper"
            rules="max:80"
            v-slot="{ errors, invalid }"
          >
            <input
              class="u-full-width form__answer-text"
              :disabled="invalid"
              type="text"
              v-model="answer.text"
            />
            <span class="form__error">{{ errors[0] }}</span>
            <span
              @click="resetAnswer(answer)"
              v-if="invalid"
              class="form__answer-reset"
              >Reset</span
            >
          </ValidationProvider>
          <button
            class="button form__answer-btn form__section-btn"
            type="button"
            @click="deleteAnswer(answer.id)"
          >
            <fa-icon icon="trash"></fa-icon>
          </button>
        </li>
        <li class="form__answer" v-if="answers.length <= 10">
          <ValidationProvider
            class="form__input-wrapper"
            rules="max:80"
            v-slot="{ errors, invalid }"
          >
            <input
              class="u-full-width form__answer-text"
              :disabled="invalid"
              type="text"
              v-model="newAnswer"
            />
            <span class="form__error">{{ errors[0] }}</span>
            <span
              @click="resetNewAnswer()"
              v-if="invalid"
              class="form__answer-reset"
              >Reset</span
            >
          </ValidationProvider>
          <button
            class="button form__answer-btn form__section-btn"
            type="button"
            @click="addAnswer"
          >
            <fa-icon icon="plus"></fa-icon>
          </button>
        </li>
      </ul>

      <input
        class="button button-primary form__section-btn"
        type="button"
        @click="reset"
        value="Reset"
      />
    </form>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
import { ValidationProvider } from "vee-validate";
import { extend } from "vee-validate";
import { max } from "vee-validate/dist/rules";

extend("max", {
  ...max,
  message: "This field has a limit of 80 characters",
});

export default {
  name: "",
  components: {
    ValidationProvider,
  },
  data: () => ({
    newAnswer: "",
  }),
  methods: {
    reset() {
      this.$store.commit("resetAll");
      this.newAnswer = "";
    },
    resetNewAnswer() {
      this.newAnswer = "";
    },
    resetAnswer(ans) {
      ans.text = "";
    },
    resetQuestion() {
      this.question = "";
    },
    deleteAnswer(id) {
      var index = this.answers.findIndex((item) => item.id === id);
      this.answers.splice(index, 1);
    },
    addAnswer() {
      var newID = uuid.v1();
      this.answers.push({
        id: newID,
        text: this.newAnswer,
        votes: 0,
      });

      this.newAnswer = "";
    },
  },
  created() {},
  computed: {
    answers() {
      return this.$store.state.answers;
    },
    question: {
      get() {
        return this.$store.state.question;
      },
      set(value) {
        this.$store.commit("setQuestion", value);
      },
    },
  },
};
</script>

<style lang="scss">
.form__section {
}

.form__section-label {
  margin-right: 10px;
}

.button.button-primary.form__section-btn {
  margin-left: auto;

  &.disabled {
    pointer-events: none;
    background-color: #eeeeee;
    border-color: #eeeeee;
    color: #000;
  }
}

.form__answers {
  list-style-type: none;
  overflow: hidden;
}

.form__answer-text {
  margin-bottom: 0;

  &:disabled {
    border: #eeeeee;
    background-color: #eeeeee;
  }
}

.form__input-wrapper {
  margin-bottom: 1.5rem;
  margin-right: 10px;
}

.form__answer-reset {
  color: #33c3f0;
  text-decoration: underline;
  cursor: pointer;
  font-size: 12px;
  margin-left: 5px;

  &:hover {
    text-decoration: none;
  }
}

.form__error {
  color: #d9534f;
  font-size: 12px;
}

.form__answer {
  display: flex;
}

.form__answer-text {
  margin-right: 10px;
}

.button.form__answer-btn {
  padding: 0 15px;
}
</style>