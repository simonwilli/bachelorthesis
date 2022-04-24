<template>
  <div class="QuestionnaireContainer" v-if="!showResults">
    <b-card style="max-width: 80%; margin: auto" class="mb-2">
      <b-card-text>
        <questionnaire-navigation
          :navigation="categoryNames"
          :currentCategory="currentCategory"
          @navigationChange="changeNavigation"
        />
        <question-container
          :questions="currentQuestions"
          :answers="answers"
          @nextPage="onShowNextPage"
          @backPage="onShowBackPage"
          :lastQuestion="isLastCategory"
          :firstQuestion="isFirstCategory"
          @valueChanged="onValueChanged"
          @showResult="onShowResult"
          @reset="onReset"
        />
      </b-card-text>
    </b-card>
  </div>
  <div class="result-container" v-else>
    <result-container :questions="allQuestions" :answers="answers" :categoryNames="categoryNames" />
  </div>
</template>

<script>
import { questions, categoryNames } from '@/components/questions';
import QuestionContainer from './QuestionContainer.vue';
import QuestionnaireNavigation from './QuestionnaireNavigation.vue';
import ResultContainer from './ResultContainer.vue';

export default {
  components: { QuestionnaireNavigation, QuestionContainer, ResultContainer },
  data() {
    return {
      categoryNames,
      currentCategory: categoryNames[0],
      currentCategoryIndex: 0,
      answers: {},
      showResults: false,
    };
  },
  computed: {
    currentQuestions() {
      return questions[this.currentCategoryIndex].questions;
    },
    isLastCategory() {
      return questions.length - 1 === this.currentCategoryIndex;
    },
    isFirstCategory() {
      return this.currentCategoryIndex === 0;
    },
    allQuestions() {
      return questions;
    },
  },
  methods: {
    onShowNextPage() {
      this.currentCategoryIndex++;
      this.currentCategory = questions[this.currentCategoryIndex].categoryName;
    },
    onShowBackPage() {
      this.currentCategoryIndex--;
      this.currentCategory = questions[this.currentCategoryIndex].categoryName;
    },
    onShowResult() {
      this.showResults = true;
    },
    onReset() {
      this.currentCategoryIndex = 0;
      this.currentCategory = questions[this.currentCategoryIndex].categoryName;
      this.answers = {};
    },
    onValueChanged($event) {
      console.log($event);
      const { questionId, value } = $event;
      this.answers[questionId] = value;
    },
    changeNavigation(event) {
      const newCategoryName = event.categoryName;
      this.currentCategory = newCategoryName;
      this.currentCategoryIndex = this.categoryNames.indexOf(newCategoryName);
    },
  },
  created() {
    let i = 0;
    for (const category of questions) {
      for (const question of category.questions) {
        question.id = `${category.categoryName}.${i}`;
        i++;
      }
    }
  },
};
</script>
