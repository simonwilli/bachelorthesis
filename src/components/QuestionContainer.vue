<template>
  <div>
    <div class="QuestionConatiner">
      <div v-for="question in questions" :key="question.id">
        <boolean-question
          v-if="isBooleanQuestion(question)"
          :question="question"
          @valueChanged="valueChanged"
        />
        <scale-question
          v-if="isScaleQuestion(question)"
          :question="question"
          @valueChanged="valueChanged"
        />
      </div>
    </div>
    <b-button variant="primary" @click.prevent="onBackPageClicked" v-if="!firstQuestion">
      Back Page
    </b-button>
    <b-button variant="primary" @click.prevent="onNextPageClicked" v-if="!lastQuestion">
      Next Page
    </b-button>
    <b-button variant="primary" @click.prevent="onShowResultClicked" v-if="lastQuestion">
      Show Result
    </b-button>
  </div>
</template>

<script>
import BooleanQuestion from '@/components/BooleanQuestion.vue';
import ScaleQuestion from '@/components/ScaleQuestion.vue';

export default {
  components: {
    BooleanQuestion,
    ScaleQuestion,
  },
  props: ['questions', 'lastQuestion', 'firstQuestion', 'showResult'],
  methods: {
    onNextPageClicked() {
      this.$emit('nextPage');
    },
    onBackPageClicked() {
      this.$emit('backPage');
    },
    onShowResultClicked() {
      this.$emit('showResult');
    },
    valueChanged($event) {
      this.$emit('valueChanged', $event);
    },
    isBooleanQuestion(question) {
      return question.type === 'bool';
    },
    isScaleQuestion(question) {
      return question.type === 'likert';
    },
  },
};
</script>
