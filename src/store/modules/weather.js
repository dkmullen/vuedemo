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
    for (let city of cities) {
      console.log(city.code);
      const response = await api.getWeather(city.code).catch((err) => {
        console.log(err);
      });
      if (response) {
        console.log(response);
        const temperature = Math.round(
          ((response.data.main.temp - 273.15) * 9) / 5 + 32
        );
        console.log(`${city.name} - ${temperature} F`);
        commit('setTemps', { name: city.name, temp: temperature });
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
