<template>
  <div>
    <BarChart
      :chartLabels="cities"
      :chartValues="temps"
      :chartTitle="'Temperatures from favorite cities (F)'"
    />
  </div>
</template>

<script>
import BarChart from '../charts/BarChart.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: { BarChart },
  computed: mapGetters(['cities', 'temps']),
  methods: { ...mapActions(['getWeather']) },

  data() {
    return {};
  },
  created() {
    this.getWeather([
      { name: 'Stockholm', code: 2673722 },
      { name: 'Nelson, NZ', code: 2186280 },
      { name: 'Akron', code: 5145476 },
      { name: 'Denver', code: 2673722 },
      { name: 'Tokyo', code: 1850147 },
      { name: 'Melbourne', code: 2158177 },
      { name: 'Moscow', code: 524894 },
      { name: 'Edmonton', code: 5946768 },
    ]);
  },
};
</script>

<style lang="scss" scoped></style>
