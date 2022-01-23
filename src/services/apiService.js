import axios from 'axios';
import ENV from '../../.env.js';

export default {
  getWeather(cityCode) {
    const querystring = `https://api.openweathermap.org/data/2.5/weather?id=${cityCode}&appid=${ENV.weatherKey}&units=imperial`;
    return axios.get(querystring);
  },

  getNewsList() {
    const querystring = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;
    return axios.get(querystring);
  },

  async getNewsItem(itemNumber) {
    const querystring = `https://hacker-news.firebaseio.com/v0/item/${itemNumber}.json?print=pretty`;
    return axios.get(querystring);
  },
};
