<template>
  <div class="QuestionConatiner">
    <question-form
      v-for="question in questions"
      :key="question.question"
      :question="question"
      @valueChanged="valueChanged"
    />
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
import QuestionForm from "./QuestionForm.vue";

export default {
  components: { QuestionForm },
  props: ["questions", "lastQuestion", "firstQuestion", "showResult"],
  methods: {
    onNextPageClicked() {
      this.$emit("nextPage");
    },
    onBackPageClicked() {
      this.$emit("backPage");
    },
    onShowResultClicked() {
      this.$emit("showResult");
    },
    valueChanged($event) {
      this.$emit("valueChanged", $event);
    },
  },
};
</script>
