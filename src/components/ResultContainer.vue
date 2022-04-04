<template>
  <div class="result-container">
    <table>
      <tr v-for="data in resultData" :key="data.name">
        <td>{{ data.name }}</td>
        <td>{{ data.weightedAverage }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["questions", "answers"],
  data: function () {
    return {
      resultData: [],
    };
  },
  computed: {
    categories: function () {
      return Object.keys(this.questions);
    },
  },
  methods: {
    calculateCategoryAverage(categoryName) {
      const questionIds = this.questions[categoryName].map((question) => {
        return question.id;
      });
      let categoryCounter = 0;
      const categorySum = Object.keys(this.answers)
        .filter((key) => {
          return questionIds.includes(key);
        })
        .filter((key) => {
          return !isNaN(this.answers[key]);
        })
        .map((key) => {
          categoryCounter++;
          return parseInt(this.answers[key]);
        })
        .reduce((a, b) => a + b, 0);
      console.log("-> ", categorySum, categoryCounter);
      return categorySum / categoryCounter;
    },
  },
  created() {
    let list = [];
    this.categories.forEach((categoryName) => {
      const categoryAverage = this.calculateCategoryAverage(categoryName);
      const entry = {
        name: categoryName,
        average: categoryAverage,
      };
      if (!isNaN(categoryAverage)) {
        list.push(entry);
      }
    });

    const totalSum = list.reduce((a, b) => {
      return a + b.average;
    }, 0);

    list = list.map((entry) => {
      return {
        name: entry.name,
        weightedAverage: entry.average / totalSum,
      };
    });
    console.log(list);
    this.resultData = list;
  },
};
</script>
