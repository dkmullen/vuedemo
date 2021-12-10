import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#055052',
				secondary: '#b0bec5',
				accent: '#53B8BB',
				error: '#b71c1c',
			},
			dark: {
				primary: '#003638',
				anchor: '#6D9886',
				secondary: '#b0bec5',
				accent: '#53B8BB',
				error: '#b71c1c',
			},
		},
	},
});
