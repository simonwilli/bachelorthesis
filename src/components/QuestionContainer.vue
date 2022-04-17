<template>
  <div>
    <div class="QuestionConatiner">
      <div v-for="question in questions"
           :key="question.id">
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
    <div v-if="!lastQuestion" class="NextPage">
      <b-button block variant="primary" @click.prevent="onNextPageClicked">
        Next Page
      </b-button>
    </div>
    <div v-if="!firstQuestion" class="BackPage">
      <b-button block variant="primary" @click.prevent="onBackPageClicked">
        Back Page
      </b-button>
    </div>
    <div v-if="lastQuestion" class="ShowResult">
      <b-button block variant="primary" @click.prevent="onShowResultClicked">
        Show Result
      </b-button>
    </div>
  </div>
</template>

<script>
import BooleanQuestion from '@/components/BooleanQuestion';
import ScaleQuestion from '@/components/ScaleQuestion';

export default {
  components: {
    BooleanQuestion,
    ScaleQuestion
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
