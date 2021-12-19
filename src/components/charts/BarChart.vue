<template>
  <div>
    <canvas :id="`barChart-${chartID}`"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import UniqueID from '../../features/UniqueID';

export default {
  name: 'BarChart',
  props: ['chartLabels', 'chartValues', 'chartTitle'],
  data() {
    return {
      chartID: '',
      chartType: 'bar',
      chartData: {
        labels: [],
        datasets: [
          {
            label: '',
            backgroundColor: [],
            borderColor: [],
            borderWidth: 0,
            data: [],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                min: -20,
                max: 120,
              },
            },
          ],
        },
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.chartID = UniqueID().getID().toString();
      this.chartData.labels = this.chartLabels;
      this.chartData.datasets[0].data = this.chartValues;
      this.chartData.datasets[0].label = this.chartTitle;
      for (let i = 0; i < this.chartValues.length; i++) {
        if (i % 2 === 0) {
          this.chartData.datasets[0].backgroundColor.push('#055052');
        } else {
          this.chartData.datasets[0].backgroundColor.push('#53B8BB');
        }
      }
      const config = {
        type: this.chartType,
        data: this.chartData,
        options: this.options,
      };
      this.$nextTick(() => {
        const myChart = new Chart(
          document.getElementById(`barChart-${this.chartID}`),
          config
        );
      });
    }, 2000);
  },
};
</script>

<style></style>
