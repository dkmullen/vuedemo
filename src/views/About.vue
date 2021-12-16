<template>
  <v-container>
    <h1>Heel it now, dig?</h1>
    <v-row>
      <v-col cols="12" md="6">
        <LineChart />
      </v-col>
      <v-col cols="12" md="6">
        <WeatherWidget />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <DonutChart />
      </v-col>
      <v-col cols="12" md="6">
        <LineChart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LineChart from '../components/charts/LineChart.vue';
import DonutChart from '../components/charts/DonutChart.vue';
import WeatherWidget from '../components/widgets/WeatherWidget.vue';
import { mapActions, MapActions } from 'vuex';

export default {
  components: { LineChart, WeatherWidget, DonutChart },
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
