import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Makes a global component out of any in /components/shared named Base*.vue
const requireComponent = require.context(
	'./components/base-components',
	false,
	/Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
	const componentConfig = requireComponent(fileName);

	const componentName = upperFirst(
		camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
	);

	Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({
	vuetify,
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
