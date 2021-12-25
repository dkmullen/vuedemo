<template>
  <div>
    <v-card class="mx-auto" max-width="400" outlined v-if="weatherObj">
      <v-list-item two-line>
        <v-list-item-content>
          <v-row>
            <v-col cols="2">
              <v-img
                :src="weatherObj.iconPath"
                class="icon"
                alt="Weather icon"
              ></v-img>
            </v-col>
            <v-col cols="10">
              <v-list-item-title class="text-h5 city-name"
                >{{ weatherObj.name }}
              </v-list-item-title>
            </v-col>
          </v-row>

          <v-list-item-subtitle>
            <span class="text-capitalize">{{ weatherObj.condition }}</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-text>
        <v-row align="center">
          <v-col class="text-h2" cols="8">
            {{ weatherObj.temperature }}&deg;F
          </v-col>
          <v-col cols="4">
            <p>Max/Min: {{ weatherObj.tempMax }}/{{ weatherObj.tempMin }}</p>
          </v-col>
        </v-row>
      </v-card-text>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-cloud-download</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle
          >Humidity: {{ weatherObj.humidity }}%</v-list-item-subtitle
        >
      </v-list-item>
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
      now: null,
    };
  },
  methods: {
    ...mapActions(['getFullWeather']),
    async getWeather() {
      const response = await api.getWeather(this.cityCode).catch((err) => {
        console.log(err);
      });
      if (response) {
        console.log(response.data);
        // const temperature = Math.round(
        //   ((response.data.main.temp - 273.15) * 9) / 5 + 32
        // );
        this.weatherObj = {
          name: this.cityName,
          temperature: this.convertTemperature(response.data.main.temp),
          tempMax: this.convertTemperature(response.data.main.temp_max),
          tempMin: this.convertTemperature(response.data.main.temp_min),
          condition: response.data.weather[0].description,
          iconPath: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`,
          humidity: response.data.main.humidity,
          timezone: response.data.timezone,
          time: this.now + response.data.timezone,
        };
      }
    },
    convertTemperature(temp) {
      return Math.round(((temp - 273.15) * 9) / 5 + 32);
    },
  },
  created() {
    this.getWeather();
  },
};
</script>

<style lang="scss" scoped>
.city-name {
  position: relative;
  top: 5px;
  right: 5px;
}
</style>
