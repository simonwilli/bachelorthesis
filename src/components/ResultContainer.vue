<template>
  <div class="result-container">
    <p>Winner: {{ getArchitectureWinner }}</p>
    <table>
      <tr v-for="data in resultData" :key="data.name">
        <td>{{ data.name }}</td>
        <td>{{ data.weight }}</td>
        <td>{{ data.monolithAverage }}</td>
        <td>{{data.microServiceAverage}}</td>
      </tr>
      <tr>
        <td>total</td>
        <td>100%</td>
        <td>{{monolithTotal}}</td>
        <td>{{microServiceTotal }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['questions', 'answers'],
  data() {
    return {
      resultData: [],
      microServiceTotal: 0,
      monolithTotal: 0,
    };
  },
  computed: {
    categories() {
      return Object.keys(this.questions);
    },
    getArchitectureWinner() {
      if (this.monolithTotal >= this.microServiceTotal) {
        return 'Monolith';
      }
      return 'Micro Services';
    },
  },
  methods: {
    calculateCategoryAverage(categoryName) {
      const weight = 0.1;
      const questionIds = this.questions[categoryName].map((question) => question.id);
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
          microSum += parseInt(answerParts[1]);
          count++;
        } else if (answerParts[0] === 'mo') {
          monoSum += parseInt(answerParts[1]);
          count++;
        }
      }

      const monoAvg = (monoSum / count) * weight;
      const microAvg = (microSum / count) * weight;

      return {
        weight,
        monoAvg,
        microAvg,
      };
    },
  },
  created() {
    const list = [];
    let monolithTotal = 0;
    let microServiceTotal = 0;
    this.categories.forEach((categoryName) => {
      const avgs = this.calculateCategoryAverage(categoryName);
      const entry = {
        name: categoryName,
        weight: avgs.weight,
        monolithAverage: avgs.monoAvg,
        microServiceAverage: avgs.microAvg,
      };

      monolithTotal += avgs.monoAvg;
      microServiceTotal += avgs.microAvg;

      list.push(entry);
    });

    this.monolithTotal = monolithTotal;
    this.microServiceTotal = microServiceTotal;

    this.resultData = list;
  },
};
</script>
