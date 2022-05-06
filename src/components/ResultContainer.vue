<template>
  <div>
    <div class="result-frame">
    <b-card >
      <p>Architecture: <span class="bold">{{ getArchitectureWinner }} </span></p>
      <p>Hosting: <span class="bold"> {{ getCloudWinner }} </span></p>
    </b-card>
    </div>
    <div class="result-container">
      <b-card>
        <h3>Vergleich Architektur</h3>
        <p>Max 300 Punkte</p>
      <div class="architecture-result">
        <table class="table-spacing">
          <tr>
            <th class="header-name">Kategorie </th>
            <th class="header-weight">Gewicht</th>
            <th class="header-monolith">VM / Monolith</th>
            <th class="header-micro">Container / MicroService</th>
          </tr>
          <tr v-for="data in architectureResultData" :key="data.name">
            <td class="table-name">{{ data.name }}</td>
            <td class="table-weight">{{ formatNumber(data.weight) }}%</td>
            <td class="table-monolith">{{ formatNumber(data.monolithAverage) }} Pt.</td>
            <td class="table-micro">{{ formatNumber(data.microServiceAverage) }} Pt.</td>
          </tr>
          <tr>
            <td class="table-name bold">Total</td>
            <td class="table-weight bold">100%</td>
            <td class="table-monolith bold">{{ formatNumber(monolithTotal) }} Pt.</td>
            <td class="table-micro bold">{{ formatNumber(microServiceTotal) }} Pt.</td>
          </tr>
        </table>
      </div>
      </b-card>
      <div class="cloud-result">
        <b-card>
          <h3>Vergleich OnPremise vs. Cloud</h3>
          <p>Max 6 Punkte</p>
        <table class="table-cloud">
          <tr v-for="cloudMust in cloudResultMustData" :key="cloudMust.text">
            <td class="table-cloud-result-left row-cloud bold">{{ cloudMust.text }}</td>
            <td class="table-cloud-result-right row-cloud">
              <b-icon icon="check-square" variant="success" v-if="cloudMust.value"></b-icon>
              <b-icon icon="x-circle" variant="danger" v-else-if="!cloudMust.value"></b-icon>
            </td>
          </tr>
        </table>
        <div v-if="allCloudMustTrue">
          <table class="table-spacing">
            <tr>
              <th class="header-name bold">Kategorie </th>
              <th class="header-monolith bold">vor Ort</th>
              <th class="header-micro bold">Cloud</th>
            </tr>
            <tr v-for="cloudScale in cloudResultScaleData" :key="cloudScale.text">
              <td class="table-name">{{ cloudScale.text }}</td>
              <td class="table-monolith">{{ (cloudScale.onPremValue) }} Pt.</td>
              <td class="table-micro">{{ (cloudScale.cloudValue) }} Pt.</td>
            </tr>
            <tr>
              <td class="table-name bold">Total</td>
              <td class="table-monolith bold">{{ (onPremTotal) }} Pt.</td>
              <td class="table-micro bold">{{ (cloudTotal) }} Pt.</td>
            </tr>
          </table>
        </div>
        </b-card>
      </div>
    </div>
    <b-button class="button-reset" variant="secondary" @click.prevent="onResetClicked">
      Restart
    </b-button>
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
        return 'Beide Technologien/Architekturen können verwendet werden';
      }

      if (this.monolithTotal > this.microServiceTotal) {
        return 'Virtuelle Maschine / Monolith';
      }
      return 'Container / Micro Services';
    },
    getCloudWinner() {
      if (!this.allCloudMustTrue) {
        return 'onPremise / vor Ort';
      }

      if (this.cloudTotal === this.onPremTotal) {
        return 'Keine Preferänz';
      }

      if (this.cloudTotal > this.onPremTotal) {
        return 'Cloud';
      }
      return 'onPremise / vor Ort';
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
    onResetClicked() {
      this.$emit('reset');
    },
    formatNumber(n) {
      return (n * 100).toFixed(0);
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

.result-frame {
  text-align: left;
  margin: auto;
  max-width: 80%;
}
.result-container {
  max-width: 80%;
  margin: auto;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;

  th, td {
    padding: 5px;
  }
  .bold {
    font-weight: bold;
  }
  .table-spacing {
    border-spacing: 5px;
    border-collapse: separate;
  }

  .architecture-result {
    grid-area: 1 / 1 / 2 / 2;
    margin: auto;
  }

  .cloud-result {
    grid-area: 1 / 2 / 2 / 3;
    margin: auto;
  }
  .header-name{
    background: #c4c4c4;
    text-align: left;
    width: 150px;
    border-radius:4px;
  }
  .header-monolith{
    background: #c4d402;
    width: 150px;
    border-radius:4px;
  }
  .header-weight{
    background: #c4c4c4;
    width: 100px;
    border-radius:4px;

  }
  .header-micro{
    background: #66a7f2;
    width: 150px;
    border-radius: 4px;
  }
  .table-name{
    background: #f4f4f4;
    text-align: left;
    width: 150px;
    border-radius:4px;
  }
  .table-monolith{
    background: #e7ed99;
    width: 150px;
    border-radius:4px;
  }
  .table-weight{
    background: #f4f4f4;
    width: 100px;
    border-radius:4px;

  }
  .table-micro{
    background: #b2d3f8;
    width: 150px;
    border-radius: 4px;
  }
  .row-cloud{
    background: #c4c4c4;
    width: 230px;
  }
  .table-cloud-result-left{
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    text-align: left;
  }
  .table-cloud-result-right{
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .table-cloud{
    border-collapse: separate;
    border-spacing: 0 5px
  }
  .button-reset{
    margin-top: 10px;
    width: 80%
  }
}
</style>
