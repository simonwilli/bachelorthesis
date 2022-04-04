<template>
  <div class="QuestionnaireNavigation">
    <p>
      <span
        v-for="nav in navigation"
        :key="nav"
        :class="isCurrentCategory(nav)"
        >{{ nav }}</span
      >
    </p>
  </div>
</template>

<script>
import DocumentationFrame from "../components/DocumentationFrame.vue";

export default {
  props: ["navigation", "currentCategory"],
  components: { DocumentationFrame },
  methods: {
    isCurrentCategory(navigation) {
      if (navigation === this.currentCategory) {
        return "selected";
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
span {
  margin-left: 10px;

  &:first-child {
    margin-left: 0;
  }

  &.selected {
    color: red;
  }
}
</style>
