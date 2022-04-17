<template>
  <div class="QuestionForm">
    <b-card style="max-width: 80%; margin: auto" class="mb-2">
      <b-card-text>
        <p>{{ question.question }}</p>
        <b-form-group label="test">
          <b-form-radio-group
            v-model="selected"
            :options="options"
            value-field="item"
            text-field="name"
            @input="likertScaleChanged($event)"
          >
          </b-form-radio-group>
        </b-form-group>
        <div class="mt-3">
          Selected: <strong>{{ result }}</strong>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['question'],
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        {
          item: 'mo:3',
          name: 'value 1'
        },
        {
          item: 'mo:2',
          name: 'value 2'
        },
        {
          item: 'mo:1',
          name: 'value 3'
        },
        {
          item: 'mi:1',
          name: 'value 4'
        },
        {
          item: 'mi:2',
          name: 'value 5'
        },
        {
          item: 'mi:3',
          name: 'value 6'
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
    result: function () {
      return (
        'QuestionNumber: ' +
        this.question.questionNumber +
        ' Selected: ' +
        this.selected
      );
    },
  },
};
</script>
