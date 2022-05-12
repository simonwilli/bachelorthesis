<template>
  <div class="QuestionForm">
    <b-card style="max-width: 80%; margin: auto" class="mb-2">
      <b-card-text>
        <p>{{ question.question }}</p>
        <div class="question-grid">
          <div class="question-grid-left">
            <p v-if="hasLeftText" class="left-text">{{ getQuestionTextLeft }}</p>
          </div>
          <div class="question-grid-main">
            <b-form-radio-group
              v-model="selected"
              :options="options"
              value-field="item"
              text-field="name"
              @input="likertScaleChanged($event)"
              buttons
              button-variant="outline-primary"
            >
            </b-form-radio-group>
          </div>
          <div class="question-grid-right">
            <p v-if="hasRightText" class="left-text">{{ getQuestionTextRight }}</p>
          </div>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    question: Object,
    answer: Object,
    optionValues: {
      type: Array,
      default() {
        return ['1', '2', '3', '4', '5', '6'];
      },
    },
  },
  data() {
    return {
      selected: this.answer == null ? null : this.answer,
      options: [
        {
          item: 'mo:3',
          name: this.optionValues[0],
        },
        {
          item: 'mo:2',
          name: this.optionValues[1],
        },
        {
          item: 'mo:1',
          name: this.optionValues[2],
        },
        {
          item: 'mi:1',
          name: this.optionValues[3],
        },
        {
          item: 'mi:2',
          name: this.optionValues[4],
        },
        {
          item: 'mi:3',
          name: this.optionValues[5],
        },
      ],
    };
  },
  methods: {
    likertScaleChanged(likertValue) {
      this.$emit('valueChanged', {
        questionId: this.question.id,
        value: likertValue,
      });
    },
  },
  computed: {
    hasLeftText() {
      return this.question.properties && this.question.properties.left;
    },
    getQuestionTextLeft() {
      return this.question.properties.left;
    },
    hasRightText() {
      return this.question.properties && this.question.properties.right;
    },
    getQuestionTextRight() {
      return this.question.properties.right;
    },
  },
};
</script>

<style lang="scss">
div.question-grid {
  display: grid;
  grid-template-columns: 1fr 400px 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  div.question-grid-left {
    grid-area: 1 / 1 / 2 / 2;
    justify-self: center;
    font-weight: bold;
  }

  div.question-grid-main {
    grid-area: 1 / 2 / 2 / 3;
  }

  div.question-grid-right {
    grid-area: 1 / 3 / 2 / 4;
    justify-self: center;
    font-weight: bold;
  }
}
</style>
