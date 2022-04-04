<template>
  <div class="QuestionnaireContainer" v-if="!showResults">
    <b-card style="max-width: 80%; margin: auto" class="mb-2">
      <b-card-text>
        <questionnaire-navigation
          :navigation="categoryNames"
          :currentCategory="currentCategory"
        />
        <question-container
          :questions="currentQuestions"
          @nextPage="onShowNextPage"
          @backPage="onShowBackPage"
          :lastQuestion="isLastCategory"
          :firstQuestion="isFirstCategory"
          @valueChanged="onValueChanged"
          @showResult="onShowResult"
        />
      </b-card-text>
    </b-card>
  </div>
  <div class="result-container" v-else>
    <result-container :questions="allQuestions" :answers="answers" />
  </div>
</template>

<script>
import QuestionContainer from "./QuestionContainer.vue";
import QuestionnaireNavigation from "./QuestionnaireNavigation.vue";
import ResultContainer from "./ResultContainer.vue";

const questions = {
  Faktor1: [
    {
      question: "This is the question text",
      type: "likert",
    },
    {
      question: "This is the question text 2",
      type: "bool",
    },
  ],
  Faktor2: [
    {
      question: "This is the question text",
      type: "bool",
    },
  ],
  Faktor3: [
    {
      question: "This is the question text",
      type: "likert",
    },
    {
      question: "This is the question text 2",
      type: "bool",
    },
  ],
};

export default {
  components: { QuestionnaireNavigation, QuestionContainer, ResultContainer },
  data() {
    return {
      categoryNames: Object.keys(questions),
      currentCategory: Object.keys(questions)[0],
      currentCategoryIndex: 0,
      answers: {},
      showResults: false,
    };
  },
  computed: {
    currentQuestions: function () {
      return questions[this.currentCategory];
    },
    currentNavigation: function () {
      return this.currentCategory;
    },
    isLastCategory: function () {
      return Object.keys(questions).length - 1 === this.currentCategoryIndex;
    },
    isFirstCategory: function () {
      return this.currentCategoryIndex === 0;
    },
    allQuestions: function () {
      return questions;
    },
  },
  methods: {
    onShowNextPage() {
      this.currentCategoryIndex++;
      this.currentCategory = Object.keys(questions)[this.currentCategoryIndex];
    },
    onShowBackPage() {
      this.currentCategoryIndex--;
      this.currentCategory = Object.keys(questions)[this.currentCategoryIndex];
    },
    onShowResult() {
      this.showResults = true;
    },
    onValueChanged($event) {
      console.log($event);
      const { questionId, value } = $event;
      this.answers[questionId] = value;
    },
  },
  created() {
    Object.keys(questions).map((key) => {
      const tempQuestions = questions[key];
      let i = 0;
      tempQuestions.map((question) => {
        question.id = key + "." + i;
        i++;
        return question;
      });

      questions[key] = tempQuestions;
    });
    console.log(questions);
  },
};
</script>
