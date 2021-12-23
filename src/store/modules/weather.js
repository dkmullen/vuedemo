import api from '../../services/apiService';

const state = {
  temps: [],
  fullWeather: [],
};
const mutations = {
  setTemps(state, city) {
    state.temps.push(city);
  },
  setFullWeather(state, weather) {
    state.fullWeather = weather;
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
        const cityObj = { name: city.name, temp: temperature };
        commit('setTemps', cityObj);
      }
    }
  },

  async getFullWeather({ commit }, city) {
    console.log(city.code);
    const response = await api.getWeather(city.code).catch((err) => {
      console.log(err);
    });
    if (response) {
      console.log(response);
      const temperature = Math.round(
        ((response.data.main.temp - 273.15) * 9) / 5 + 32
      );
      const weatherObj = {
        name: city.name,
        temperature,
        condition: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        timezone: response.data.timezone,
      };
      commit('setFullWeather', weatherObj);
      console.log(state.fullWeather);
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
