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
      allOD_ip: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            label: 'Statewide',
            borderColor: '#53B8BB',
            data: [114, 110, 103, 102, 100],
          },
          {
            label: 'Knox County',
            borderColor: 'red',
            data: [109, 110, 89, 82, 96],
          },
        ],
      },
      opioidsXHeroin_ip: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            label: 'Statewide',
            borderColor: '#53B8BB',
            data: [30, 26, 21, 19, 19],
          },
          {
            label: 'Knox County',
            borderColor: 'red',
            data: [32, 30, 20, 17, 22],
          },
        ],
      },
      stim_ip: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            label: 'Statewide',
            borderColor: '#53B8BB',
            data: [12, 13, 15, 17, 18],
          },
          {
            label: 'Knox County',
            borderColor: 'red',
            data: [13, 12, 13, 17, 16],
          },
        ],
      },
      // Are there stats for non-fatal fentanyl?
      fen_ip: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
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
      allOD_op: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            label: 'Statewide',
            borderColor: '#53B8BB',
            data: [232, 246, 252, 255, 289],
          },
          {
            label: 'Knox County',
            borderColor: 'red',
            data: [252, 327, 350, 282, 289],
          },
        ],
      },
      opioidsXHeroin_op: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            label: 'Statewide',
            borderColor: '#53B8BB',
            data: [33, 36, 35, 42, 62],
          },
          {
            label: 'Knox County',
            borderColor: 'red',
            data: [40, 56, 53, 48, 45],
          },
        ],
      },
      stim_op: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            label: 'Statewide',
            borderColor: '#53B8BB',
            data: [12, 13, 15, 17, 18],
          },
          {
            label: 'Knox County',
            borderColor: 'red',
            data: [13, 12, 13, 17, 16],
          },
        ],
      },
      // Are there stats for non-fatal fentanyl?
      fen_op: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            label: 'Statewide',
            borderColor: '#53B8BB',
            data: [12, 13, 15, 15, 15],
          },
          {
            label: 'Knox County',
            borderColor: 'red',
            data: [13, 15, 15, 12, 10],
          },
        ],
      },
      options: {},
      items: [
        { key: 'Inpatient Stays: All Drug Overdose', val: 'allOD_ip' },
        { key: 'Inpatient Stays: All Stimulant Overdose', val: 'stim_ip' },
        { key: 'Inpatient Stays: All Opioid Overdose', val: 'opioids_ip' },
        { key: 'Inpatient Stays: Fentany Overdose', val: 'fen_ip' },
        { key: 'Outpatient Stays: All Drug Overdose', val: 'allOD_op' },
        { key: 'Outpatient Stays: All Stimulant Overdose', val: 'stim_op' },
        { key: 'Outpatient Stays: All Opioid Overdose', val: 'opioids_op' },
        { key: 'Outpatient Stays: Fentany Overdose', val: 'fen_op' },
      ],
      select: { key: 'Inpatient Stays: All Drug Overdose', val: 'allOD_ip' },
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
        case 'fen_ip':
          this.dataset = this.fen_ip;
          break;
        case 'stim_ip':
          this.dataset = this.stim_ip;
          break;
        case 'opioids_ip':
          this.dataset = this.opioids_ip;
          break;
        case 'allOD_op':
          this.dataset = this.allOD_op;
          break;
        case 'fen_op':
          this.dataset = this.fen_op;
          break;
        case 'stim_op':
          this.dataset = this.stim_op;
          break;
        case 'opioids_op':
          this.dataset = this.opioids_op;
          break;
        default:
          this.dataset = this.allOD_ip;
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
      this.dataset = this.allOD_ip;
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
