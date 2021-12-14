<template>
  <div>
    <canvas :id="`barChart-${chartID}`"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import UniqueID from '../features/UniqueID';

export default {
  name: 'BarChart',
  data() {
    return {
      chartID: '',
      chartType: 'bar',
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'My Second dataset',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
            ],
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40],
          },
        ],
      },
      options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }
    };
  },
  mounted() {
    this.chartID = UniqueID().getID().toString();
    const config = {
      type: this.chartType,
      data: this.chartData,
      options: this.options,
    };
    this.$nextTick(() => {
      const myChart = new Chart(document.getElementById(`barChart-${this.chartID}`), config);
    }) 
  },
};
</script>

<style></style>
