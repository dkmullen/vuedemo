<template>
  <div>
    <canvas id="donutChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'DonutChart',
  data() {
    return {
      chartData: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
            hoverOffset: 4,
          },
        ],
      },
    };
  },
  mounted() {
    const config = {
      type: 'doughnut',
      data: this.chartData,
      options: {},
    };
    const myChart = new Chart(document.getElementById('donutChart'), config);
  },
};
</script>

<style></style>
