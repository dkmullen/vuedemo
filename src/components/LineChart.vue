<template>
  <div>
    <canvas id="lineChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'LineChart',
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      },
    };
  },
  mounted() {
    const config = {
      type: 'line',
      data: this.chartData,
      options: {},
    };
    const myChart = new Chart(document.getElementById('lineChart'), config);
  },
};
</script>

<style></style>
