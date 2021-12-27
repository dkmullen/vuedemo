<template>
  <div id="weather-grid">
    <weather-card
      v-for="city in cities"
      :key="city.code"
      :cityName="city.name"
      :cityCode="city.code"
    ></weather-card>
  </div>
</template>

<script>
import WeatherCard from '../components/widgets/WeatherCard.vue';
export default {
  components: { WeatherCard },
  data() {
    return {
      cities: [
        { name: 'Nelson NZ', code: '2186280' },
        { name: 'Stockholm', code: '2673722' },
        { name: 'Akron', code: '5145476' },
        { name: 'Denver', code: '5419384' },
        { name: 'Tokyo', code: '1850147' },
        { name: 'Melbourne', code: '2158177' },
        { name: 'Moscow', code: '524894' },
        { name: 'Edmonton', code: '5946768' },
        { name: 'Kingston TN', code: '4634671' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#weather-grid {
  display: grid;
  width: 90vw;
  max-width: 820px;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: auto;
  grid-gap: 16px;
  margin: auto;
}
</style>
