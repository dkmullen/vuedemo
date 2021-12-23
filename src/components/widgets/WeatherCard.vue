<template>
  <div>
    <v-card class="mx-auto" max-width="400" outlined v-if="weatherObj">
      <div v-for="item in weatherObj" :key="item">
        {{ item }}
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import api from '../../services/apiService';
export default {
  computed: mapState(['fullWeather']),
  props: {
    cityName: { type: String, default: 'Stockholm' },
    cityCode: { type: String, default: '2673722' },
  },
  data() {
    return {
      weatherObj: null,
    };
  },
  methods: {
    ...mapActions(['getFullWeather']),
    async getWeather() {
      const response = await api.getWeather(this.cityCode).catch((err) => {
        console.log(err);
      });
      if (response) {
        const temperature = Math.round(
          ((response.data.main.temp - 273.15) * 9) / 5 + 32
        );
        this.weatherObj = {
          name: this.cityName,
          temperature,
          condition: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          timezone: response.data.timezone,
        };
      }
    },
  },
  created() {
    this.getWeather();
  },
};
</script>

<style lang="scss" scoped></style>
