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
import QuestionContainer from './QuestionContainer.vue';
import QuestionnaireNavigation from './QuestionnaireNavigation.vue';
import ResultContainer from './ResultContainer.vue';

const questions = {
  functionality: [
    {
      question: 'Was ist der Einsatzzweck der Applikation? Welche Kritikalität hat die Applikation für das Business?',
      type: 'likert',
      property: {
        left: 'Proof of Concept',
        right: 'Business Critical',
      },
    },
  ],
  performance: [
    {
      question: 'Benötigst du eine schnelle Antwortzeit oder Skalierbarkeit',
      type: 'likert',
      property: {
        left: 'Kurze Latenz',
        right: 'Skalierbarkeit',
      },
    }, {
      question: 'This is the question text',
      type: 'likert',
      property: {
        left: 'Einfache Architektur',
        right: 'Skalierbarkeit',
      },
    },
  ],
  Reliability: [
    {
      question: 'Bist du für eine höhere Zuverlässigkeit bereit eine schwierigere Konfigruation in Kauf zunehmen ',
      type: 'likert',
      property: {
        left: 'einfache Konfiguration',
        right: 'Reliability',
      },
    },
  ],
  Security: [
    {
      question: 'Performance vs Sicherheit ',
      type: 'likert',
      property: {
        left: 'Performance',
        right: 'Sicherheit',
      },
    },
  ],
  maintainability: [
    {
      question: 'Kein Schnittstellenmanagement vs Erhöhte Wartbarkeit',
      type: 'likert',
      property: {
        left: 'Kein Schnittstellenmanagment',
        right: 'Erhöhte Wartbarkeit',
      },
    },
    {
      question: 'Tiefe Initialkosten, höhere Wartungskosten vs Hohe Initialkosten, tiefere Wartungskosten',
      type: 'likert',
      property: {
        left: 'Tiefe Initialkosten, höhere Wartungskosten',
        right: 'Hohe Initialkosten, tiefere Wartungskosten',
      },
    }, {
      question: 'Testbarkeit vs Flexibilität',
      type: 'likert',
      property: {
        left: 'Testbarkeit',
        right: 'Flexibilität',
      },
    },
  ],
  Kultur: [
    {
      question: 'Einfache Architektur vs Entwicklungsgeschwindigkeit',
      type: 'likert',
      property: {
        left: 'Einfache Architektur ',
        right: 'Entwicklungsgeschwindigkeit',
      },
    },
    {
      question: 'Klassische Kultur vs DevOps Kultur',
      type: 'likert',
      property: {
        left: 'Klassische Kultur',
        right: 'DevOps Kultur',
      },
    }, {
      question: 'Projektgrösse',
      type: 'likert',
      property: {
        left: 'Klein',
        right: 'Gross',
      },
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
    currentQuestions() {
      return questions[this.currentCategory];
    },
    currentNavigation() {
      return this.currentCategory;
    },
    isLastCategory() {
      return Object.keys(questions).length - 1 === this.currentCategoryIndex;
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
        question.id = `${key}.${i}`;
        i++;
        return question;
      });

      questions[key] = tempQuestions;
    });
    console.log(questions);
  },
};
</script>
