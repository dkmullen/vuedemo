import api from '../../services/apiService';

const state = {
  temps: [],
};
const mutations = {
  setTemps(city) {
    state.temps.push(city);
  },
};
const actions = {
  async getWeather({ commit }, cities) {
    state.temps = [];
    for (let city of cities) {
      const response = await api.getWeather(city.code).catch((err) => {
        console.log(err);
      });
      if (response) {
        const temperature = Math.round(
          ((response.data.main.temp - 273.15) * 9) / 5 + 32
        );
        state.temps.push({ name: city.name, temp: temperature });
      }
    }
  },
};
const getters = {
  cities: (state) => {
    let cities = [];
    state.temps.forEach((i) => {
      cities.push(i.name);
    });
    return cities;
  },
  temps: (state) => {
    let temps = [];
    state.temps.forEach((i) => {
      temps.push(i.temp);
    });
    return temps;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
