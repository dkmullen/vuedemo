<template>
  <div>
    <canvas :id="`lineChart-${chartID}`"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import UniqueID from '../../features/UniqueID';

export default {
  name: 'LineChart',
  data() {
    return {
      chartID: '',
      chartType: 'line',
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Monthly data',
            backgroundColor: '#055052',
            borderColor: '#53B8BB',
            data: [0, 10, 5, 2, 20, 30, 45],
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
        document.getElementById(`lineChart-${this.chartID}`),
        config
      );
    });
  },
};
</script>

<style></style>
