<template>
  <v-container>
    <h1>Heel it now, dig?</h1>
    <v-row>
      <v-col cols="12" md="6">
        <LineChart />
      </v-col>
      <v-col cols="12" md="6">
        <BarChart />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <DonutChart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LineChart from '../components/LineChart.vue';
import BarChart from '../components/BarChart.vue';
import DonutChart from '../components/DonutChart.vue';

export default {
  components: { LineChart, BarChart, DonutChart },
  data() {
    return {};
  },
};
</script>

<style></style>
