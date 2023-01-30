<template>
  <div>
    <canvas :id="`lineChart-${chartID}`"></canvas>
    <div>
      <v-select
        v-model="select"
        :items="items"
        item-text="key"
        item-value="val"
        label="Select"
        return-object
        single-line
        @change="makeSelection"
      ></v-select>
    </div>
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
      allOD: {
        labels: ['2017', '2018', '2019', '2020', '2021'],
        datasets: [
          {
            label: 'Statewide',
            borderColor: '#53B8BB',
            data: [27, 27, 31, 46, 57],
          },
          {
            label: 'Knox County',
            borderColor: 'red',
            data: [51, 57, 48, 73, 92],
          },
        ],
      },
      opioids: {
        labels: ['2017', '2018', '2019', '2020', '2021'],
        datasets: [
          {
            label: 'Statewide',
            borderColor: '#53B8BB',
            data: [19, 20, 23, 37, 43],
          },
          {
            label: 'Knox County',
            borderColor: 'red',
            data: [42, 48, 41, 61, 79],
          },
        ],
      },
      stim: {
        labels: ['2017', '2018', '2019', '2020', '2021'],
        datasets: [
          {
            label: 'Statewide',
            borderColor: '#53B8BB',
            data: [9, 10, 14, 20, 31],
          },
          {
            label: 'Knox County',
            borderColor: 'red',
            data: [19, 26, 22, 34, 52],
          },
        ],
      },
      fen: {
        labels: ['2017', '2018', '2019', '2020', '2021'],
        datasets: [
          {
            label: 'Statewide',
            borderColor: '#53B8BB',
            data: [8, 12, 17, 31, 41],
          },
          {
            label: 'Knox County',
            borderColor: 'red',
            data: [25, 34, 32, 52, 73],
          },
        ],
      },
      options: {},
      items: [
        { key: 'All Drug Overdose Deaths', val: 'allOD' },
        { key: 'Drug Overdose Deaths Involving All Stimulants', val: 'stim' },
        { key: 'Drug Overdose Deaths Involving All Opioids', val: 'opioids' },
        { key: 'Drug Overdose Deaths Involving Fentanyl', val: 'fen' },
      ],
      select: { key: 'All Drug Overdose Deaths', val: 'allOD' },
      dataset: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this.chartID = UniqueID().getID().toString();
      this.buildChart();
    }, 100);
  },
  methods: {
    makeSelection(n) {
      switch (n.val) {
        case 'fen':
          this.dataset = this.fen;
          break;
        case 'stim':
          this.dataset = this.stim;
          break;
        case 'opioids':
          this.dataset = this.opioids;
          break;
        default:
          this.dataset = this.allOD;
          break;
      }
      let config = {
        type: this.chartType,
        data: this.dataset,
        options: this.options,
      };

      this.$nextTick(() => {
        new Chart(document.getElementById(`lineChart-${this.chartID}`), config);
      });
    },
    buildChart() {
      this.dataset = this.allOD;
      const config = {
        type: this.chartType,
        data: this.dataset,
        options: this.options,
      };
      this.$nextTick(() => {
        new Chart(document.getElementById(`lineChart-${this.chartID}`), config);
      });
    },
  },
};
</script>

<style></style>
