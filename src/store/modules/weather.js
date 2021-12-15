import api from '../../services/apiService';


	const state = {};
	const mutations = {};
	const actions = {
    async getWeather(cityCode) {
      console.log("cityCode", cityCode)
      const response = await api.getWeather(cityCode).catch((err) => { 
        console.log(err);
      })
      if (response) {
        console.log(response);
      }
    }
  };
	const getters = {};

  export default {
    state,
    getters,
    actions,
    mutations
}