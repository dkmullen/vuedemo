<template>
  <div>
    <v-card class="mx-auto" max-width="400" outlined v-if="weatherObj">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5"
            >{{ weatherObj.name }}
          </v-list-item-title>
          <v-list-item-subtitle
            >{{ weatherObj.time }},
            <span class="text-capitalize">{{ weatherObj.condition }}</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-text>
        <v-row align="center">
          <v-col class="text-h2" cols="6">
            {{ weatherObj.temperature }}&deg;F
          </v-col>
          <v-col cols="6">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sun.png"
              alt="Sunny image"
              width="92"
            ></v-img>
          </v-col>
        </v-row>
      </v-card-text>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-cloud-download</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>{{ weatherObj.humidity }}%</v-list-item-subtitle>
      </v-list-item>
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
        const temperature = Math.round(
          ((response.data.main.temp - 273.15) * 9) / 5 + 32
        );
        this.weatherObj = {
          name: this.cityName,
          temperature,
          condition: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          timezone: response.data.timezone,
          time: this.now + response.data.timezone,
        };
      }
    },
    calcTime(city, offset) {
      // create Date object for current location
      let d = new Date();
      console.log(d.getTime(), d.getTimezoneOffset());
      // convert to msec
      // add local time zone offset
      // get UTC time in msec
      let utc = d.getTime() + d.getTimezoneOffset() * 600000;
      console.log(utc);
      // create new Date object for different city
      // using supplied offset
      let nd = new Date(d + 3600000 * offset);

      // return time as a string
      console.log('The local time in ' + city + ' is ' + nd.toLocaleString());
    },
  },
  created() {
    this.getWeather();
    this.now = Date.now();
    this.calcTime('Denver', 1);
  },
};
</script>

<style lang="scss" scoped></style>
