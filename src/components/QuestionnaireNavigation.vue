<template>
  <div class="QuestionnaireNavigation">
    <p>
      <span
        v-for="nav in navigation"
        :key="nav"
        :class="isCurrentCategory(nav)"
        @click="changeNavigation(nav)"
        >{{ nav }}</span
      >
    </p>
  </div>
</template>

<script>
import DocumentationFrame from './DocumentationFrame.vue';

export default {
  props: ['navigation', 'currentCategory'],
  components: { DocumentationFrame },
  methods: {
    isCurrentCategory(navigation) {
      if (navigation === this.currentCategory) {
        return 'selected';
      }
      return '';
    },
    changeNavigation(categoryName) {
      this.$emit('navigationChange', {
        categoryName,
      });
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
    color: blue;
  }
}
</style>
