<template>
  <div>
    <p>Architecture: {{ getArchitectureWinner }} - Hosting: {{ getCloudWinner }}</p>
    <div class="result-container">
      <div class="architecture-result">
        <table>
          <tr>
            <th>Category</th>
            <th>Weight</th>
            <th>Monolith</th>
            <th>MicroService</th>
          </tr>
          <tr v-for="data in architectureResultData" :key="data.name">
            <td>{{ data.name }}</td>
            <td>{{ data.weight }}</td>
            <td>{{ formatNumber(data.monolithAverage) }}</td>
            <td>{{ formatNumber(data.microServiceAverage) }}</td>
          </tr>
          <tr>
            <td>total</td>
            <td>100%</td>
            <td>{{ formatNumber(monolithTotal) }}</td>
            <td>{{ formatNumber(microServiceTotal) }}</td>
          </tr>
        </table>
      </div>
      <div class="cloud-result">
        <table>
          <tr v-for="cloudMust in cloudResultMustData" :key="cloudMust.text">
            <td>{{ cloudMust.text }}</td>
            <td>{{ cloudMust.value }}</td>
          </tr>
        </table>
        <div v-if="allCloudMustTrue">
          <table>
            <tr>
              <th>Category</th>
              <th>On-Premise</th>
              <th>Cloud</th>
            </tr>
            <tr v-for="cloudScale in cloudResultScaleData" :key="cloudScale.text">
              <td>{{ cloudScale.text }}</td>
              <td>{{ formatNumber(cloudScale.onPremValue) }}</td>
              <td>{{ formatNumber(cloudScale.cloudValue) }}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{{ formatNumber(onPremTotal) }}</td>
              <td>{{ formatNumber(cloudTotal) }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['questions', 'answers', 'categoryNames'],
  data() {
    return {
      architectureResultData: [],
      cloudResultMustData: [],
      cloudResultScaleData: [],
      microServiceTotal: 0,
      monolithTotal: 0,
      onPremTotal: 0,
      cloudTotal: 0,
    };
  },
  computed: {
    getArchitectureWinner() {
      console.log('T', this.monolithTotal, this.microServiceTotal);
      if ((this.monolithTotal === this.microServiceTotal) || (Number.isNaN(this.monolithTotal) && Number.isNaN(this.microServiceTotal))) {
        return 'Both architectures fit equally well';
      }

      if (this.monolithTotal > this.microServiceTotal) {
        return 'Monolith';
      }
      return 'Micro Services';
    },
    getCloudWinner() {
      if (!this.allCloudMustTrue) {
        return 'On-Premise';
      }

      if (this.cloudTotal === this.onPremTotal) {
        return 'Both Cloud and On-Premise fit equally well';
      }

      if (this.cloudTotal > this.onPremTotal) {
        return 'Cloud';
      }
      return 'On-Premise';
    },
    allCloudMustTrue() {
      for (const cloudMust of this.cloudResultMustData) {
        if (!cloudMust.value) {
          return false;
        }
      }
      return true;
    },
  },
  methods: {
    formatNumber(n) {
      return n.toFixed(2);
    },
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
    calculateCategoryAverages(category) {
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
        monolithAverage: monoAvg || 0,
        microServiceAverage: microAvg || 0,
      };
    },
    findQuestionInCategory(questionId, category) {
      for (const question of category.questions) {
        if (question.id === questionId) {
          return question;
        }
      }
      return null;
    },
  },
  created() {
    const list = [];
    let monolithTotal = 0;
    let microServiceTotal = 0;
    for (const categoryName of this.categoryNames) {
      const category = this.getCategoryByName(categoryName);
      if (category.ref !== 'architecture') {
        continue;
      }

      const calculatedValues = this.calculateCategoryAverages(category);
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

    const cloudMustList = [];
    const cloudScaleList = [];
    for (const categoryName of this.categoryNames) {
      const category = this.getCategoryByName(categoryName);
      if (category.ref !== 'cloud') {
        continue;
      }

      const questionIds = this.getQuestionIdsForCategory(category);

      for (const key in this.answers) {
        if (!questionIds.includes(key)) {
          continue;
        }

        const question = this.findQuestionInCategory(key, category);
        const answer = this.answers[key];

        if (question.type === 'bool') {
          const entry = {
            text: question.resultText,
            type: 'must',
            value: answer,
          };
          cloudMustList.push(entry);
        } else if (question.type === 'likert') {
          const answerParts = answer.split(':');
          let onPremValue;
          let cloudValue;
          if (answerParts[0] === 'mi') {
            cloudValue = parseInt(answerParts[1], 10);
            this.cloudTotal += cloudValue;
          } else if (answerParts[0] === 'mo') {
            onPremValue = parseInt(answerParts[1], 10);
            this.onPremTotal += onPremValue;
          }
          const entry = {
            text: question.resultText,
            type: 'scale',
            onPremValue: onPremValue || 0,
            cloudValue: cloudValue || 0,
          };
          cloudScaleList.push(entry);
        }
      }
    }

    this.architectureResultData = list;
    this.cloudResultMustData = cloudMustList;
    this.cloudResultScaleData = cloudScaleList;
  },
};
</script>

<style lang="scss" scoped>
.result-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;

  .architecture-result {
    grid-area: 1 / 1 / 2 / 2;
  }

  .cloud-result {
    grid-area: 1 / 2 / 2 / 3;
  }
}
</style>
