<template>
  <div class="result-container">
    <p>Winner: {{ getArchitectureWinner }}</p>
    <table>
      <tr v-for="data in resultData" :key="data.name">
        <td>{{ data.name }}</td>
        <td>{{ data.weight }}</td>
        <td>{{ data.monolithAverage }}</td>
        <td>{{ data.microServiceAverage }}</td>
      </tr>
      <tr>
        <td>total</td>
        <td>100%</td>
        <td>{{ monolithTotal }}</td>
        <td>{{ microServiceTotal }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['questions', 'answers', 'categoryNames'],
  data() {
    return {
      resultData: [],
      microServiceTotal: 0,
      monolithTotal: 0,
    };
  },
  computed: {
    getArchitectureWinner() {
      if (this.monolithTotal === this.microServiceTotal) {
        return 'Both architectures fit equally well';
      }

      if (this.monolithTotal >= this.microServiceTotal) {
        return 'Monolith';
      }
      return 'Micro Services';
    },
  },
  methods: {
    getCategoryByName(categoryName) {
      for (const category of this.questions) {
        if (category.categoryName === categoryName) {
          return category;
        }
      }
      return null;
    },
    getQuestionIdsForCategory(category) {
      return category.questions.map((question) => question.id);
    },
    calculateCategoryAverages(categoryName) {
      const category = this.getCategoryByName(categoryName);
      const questionIds = this.getQuestionIdsForCategory(category);
      const categoryWeight = category.weight;
      let microSum = 0;
      let monoSum = 0;
      let count = 0;
      for (const key in this.answers) {
        if (!questionIds.includes(key)) {
          continue;
        }
        const answer = this.answers[key];
        const answerParts = answer.split(':');
        if (answerParts[0] === 'mi') {
          microSum += parseInt(answerParts[1], 10);
          count++;
        } else if (answerParts[0] === 'mo') {
          monoSum += parseInt(answerParts[1], 10);
          count++;
        }
      }

      const monoAvg = (monoSum / count) * categoryWeight;
      const microAvg = (microSum / count) * categoryWeight;

      return {
        weight: categoryWeight,
        monolithAverage: monoAvg,
        microServiceAverage: microAvg,
      };
    },
  },
  created() {
    const list = [];
    let monolithTotal = 0;
    let microServiceTotal = 0;
    for (const categoryName of this.categoryNames) {
      const calculatedValues = this.calculateCategoryAverages(categoryName);
      const entry = {
        name: categoryName,
        weight: calculatedValues.weight,
        monolithAverage: calculatedValues.monolithAverage,
        microServiceAverage: calculatedValues.microServiceAverage,
      };

      monolithTotal += calculatedValues.monolithAverage;
      microServiceTotal += calculatedValues.microServiceAverage;

      list.push(entry);
    }

    this.monolithTotal = monolithTotal;
    this.microServiceTotal = microServiceTotal;

    this.resultData = list;
  },
};
</script>
