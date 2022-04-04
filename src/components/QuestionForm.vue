<template>
  <div class="QuestionForm">
    <b-card style="max-width: 80%; margin: auto" class="mb-2">
      <b-card-text>
        <p>{{ question.question }}</p>

        <div v-if="isLikert">
          <p>liktert</p>
          <b-form-radio-group
            v-model="selected"
            :options="options"
            class="mb-3"
            value-field="item"
            text-field="name"
            @input="likertScaleChanged($event)"
          >
          </b-form-radio-group>
          <div class="mt-3">
            Selected: <strong>{{ result }}</strong>
          </div>
        </div>
        <div v-else-if="isBoolean">
          <b-form-checkbox v-model="checked" name="check-button" switch>
            Button Checkbox <b>(Checked: {{ checked }})</b>
          </b-form-checkbox>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["question"],
  data() {
    return {
      checked: false,
      selected: [], // Must be an array reference!
      options: [
        { item: "1", name: "value 1" },
        { item: "2", name: "value 2" },
        { item: "3", name: "value 3" },
        { item: "4", name: "value 4" },
        { item: "5", name: "value 5" },
        { item: "6", name: "value 6" },
      ],
    };
  },
  methods: {
    likertScaleChanged(likertValue) {
      this.$emit("valueChanged", {
        questionId: this.question.id,
        value: likertValue,
      });
    },
  },
  watch: {
    checked(newChecked, oldChecked) {
      this.$emit("valueChanged", {
        questionId: this.question.id,
        value: newChecked,
      });
    },
  },
  computed: {
    isLikert: function () {
      return this.question.type === "likert";
    },
    isBoolean: function () {
      return this.question.type === "bool";
    },
    result: function () {
      return (
        "QuestionNumber: " +
        this.question.questionNumber +
        " Selected: " +
        this.selected
      );
    },
  },
};
</script>
