<template>
  <div>
    <weather-card :cityName="'Nelson NZ'" :cityCode="'2186280'"></weather-card>
    <weather-card :cityName="'Stockholm'" :cityCode="'2673722'"></weather-card>
    <weather-card :cityName="'Akron'" :cityCode="'5145476'"></weather-card>
    <weather-card :cityName="'Denver'" :cityCode="'2673722'"></weather-card>
    <weather-card :cityName="'Tokyo'" :cityCode="'1850147'"></weather-card>
    <weather-card :cityName="'Melbourne'" :cityCode="'2158177'"></weather-card>
    <weather-card :cityName="'Moscow'" :cityCode="'524894'"></weather-card>
    <weather-card :cityName="'Edmonton'" :cityCode="'5946768'"></weather-card>
  </div>
</template>

<script>
import WeatherCard from '../components/widgets/WeatherCard.vue';
export default {
  components: { WeatherCard },
};
</script>

<style lang="scss" scoped></style>
