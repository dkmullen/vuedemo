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
          <v-col cols="12">
            <span class="text-h2">{{ weatherObj.temperature }}&deg;F</span>
            <p>
              Feels like: {{ weatherObj.feelsLike }} - Max/Min:
              {{ weatherObj.tempMax }}/{{ weatherObj.tempMin }}
            </p>
          </v-col>
        </v-row>
      </v-card-text>
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-weather-cloudy</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle
            >Humidity: {{ weatherObj.humidity }}%</v-list-item-subtitle
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-weather-windy-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle
            >Wind: {{ weatherObj.wind }} mph</v-list-item-subtitle
          >
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-card-actions>
        <v-btn text> Full Report </v-btn>
      </v-card-actions>
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
        this.weatherObj = {
          name: this.cityName,
          temperature: Math.round(response.data.main.temp),
          tempMax: Math.round(response.data.main.temp_max),
          tempMin: Math.round(response.data.main.temp_min),
          feelsLike: Math.round(response.data.main.feels_like),
          condition: response.data.weather[0].description,
          iconPath: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`,
          humidity: response.data.main.humidity,
          timezone: response.data.timezone,
          time: this.now + response.data.timezone,
          wind: Math.round(response.data.wind.speed),
        };
      }
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
