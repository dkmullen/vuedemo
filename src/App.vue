<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<div class="d-flex align-center">
				<v-img
					alt="Cupcake Logo"
					class="shrink mr-2"
					contain
					src="./assets/cupcake.png"
					transition="scale-transition"
					width="40"
				/>
				<div class="logo-text">Vue Demo</div>
			</div>

			<v-spacer></v-spacer>

			<v-btn @click="toggleTheme" text>
				<span class="mr-2">{{
					!$vuetify.theme.dark ? 'Go dark' : 'Go light'
				}}</span>
				<v-icon>{{
					!$vuetify.theme.dark ? 'mdi-toggle-switch-off' : 'mdi-toggle-switch'
				}}</v-icon>
			</v-btn>
		</v-app-bar>

		<v-main>
			<HelloWorld />
		</v-main>
	</v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
	name: 'App',

	components: {
		HelloWorld,
	},

	data: () => ({
		//
	}),
	methods: {
		toggleTheme() {
			this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
		},
	},
};
</script>
<style lang="scss">
.logo-text {
	font-size: 2rem;
	font-weight: 300;
	font-variant: small-caps;
}
</style>
