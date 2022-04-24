<template>
  <div class="QuestionForm">
    <b-card style="max-width: 80%; margin: auto" class="mb-2">
      <b-card-text>
        <p>{{ question.question }}</p>
        <b-form-checkbox v-model="checked" name="check-button" switch>
        </b-form-checkbox>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['question'],
  data() {
    return {
      checked: false,
    };
  },
  watch: {
    checked(newChecked, oldChecked) {
      this.$emit('valueChanged', {
        questionId: this.question.id,
        value: newChecked,
      });
    },
  },
  mounted() {
    this.$emit('valueChanged', {
      questionId: this.question.id,
      value: this.checked,
    });
  },
};
</script>
