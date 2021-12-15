import axios from 'axios';
import ENV from '../../.env.js';

export default {
  getWeather(cityCode) {
    let cc = '2673722'
      const querystring = 
        `https://api.openweathermap.org/data/2.5/weather?id=${cc}&appid=${ENV.weatherKey}`;
      return axios.get(querystring);
  },
}