import axios from 'axios';
import ENV from '../../.env.js';

export default {
  getWeather(cityCode) {
    const querystring = `https://api.openweathermap.org/data/2.5/weather?id=${cityCode}&appid=${ENV.weatherKey}`;
    return axios.get(querystring);
  },
};
