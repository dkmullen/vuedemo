<template>
  <v-container>
    <h1>Heel it now, dig?</h1>
    <v-row>
      <v-col cols="12" md="6">
        <LineChart />
      </v-col>
      <v-col cols="12" md="6">
        <LineChart-nf />
        <!-- <BarChart
          :chartLabels="[
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
          ]"
          :chartTitle="'Monthly comparison'"
          :chartValues="[0, 10, 5, 2, 20, 30, 45]"
        /> -->
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="12" md="6">
        <DonutChart />
      </v-col>
      <v-col cols="12" md="6">
        <LineChart />
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
import LineChart from '../components/charts/LineChart.vue';
import LineChartNf from '../components/charts/LineChartNf.vue';
// import DonutChart from '../components/charts/DonutChart.vue';
// import BarChart from '../components/charts/BarChart.vue';
import { mapActions } from 'vuex';

export default {
  components: { LineChart, LineChartNf },
  methods: { ...mapActions(['getWeather']) },

  data() {
    return {};
  },
  created() {
    // this.getWeather(2673722);
  },
};
</script>

<style></style>
