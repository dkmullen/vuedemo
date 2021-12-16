<template>
  <div>
    <BarChart :chartLabels="cities" :chartValues="temps" />
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
      { name: 'Nelson', code: 2186280 },
      { name: 'Akron', code: 5145476 },
      { name: 'Denver', code: 2673722 },
      { name: 'Tokyo', code: 1850147 },
    ]);
  },
};
</script>

<style lang="scss" scoped></style>
