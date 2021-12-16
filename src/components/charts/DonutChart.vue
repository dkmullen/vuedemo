<template>
  <div>
    <canvas :id="`donutChart-${chartID}`"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import UniqueID from '../../features/UniqueID';

export default {
  name: 'DonutChart',
  data() {
    return {
      chartID: '',
      chartType: 'doughnut',
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
      options: {},
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
      const myChart = new Chart(
        document.getElementById(`donutChart-${this.chartID}`),
        config
      );
    });
  },
};
</script>

<style></style>
