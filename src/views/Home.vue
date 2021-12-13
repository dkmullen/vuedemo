<template>
	<v-container>
		<v-row class="text-center">
			<v-col class="mb-4">
				<h1 class="display-2 font-weight-bold mb-3">Welcome to Vuetify</h1>

				<p class="subheading font-weight-regular">
					For help and collaboration with other Vuetify developers,
					<br />please join our online
					<a href="https://community.vuetifyjs.com" target="_blank"
						>Discord Community</a
					>
				</p>
			</v-col>

			<v-col class="mb-5" cols="12">
				<h2 class="headline font-weight-bold mb-3">What's next?</h2>

				<v-row justify="center">
					<a
						v-for="(next, i) in whatsNext"
						:key="i"
						:href="next.href"
						class="subheading mx-3"
						target="_blank"
					>
						{{ next.text }}
					</a>
				</v-row>
			</v-col>
			<v-col class="mb-5 form-wrapper" cols="12">
				<v-form
					class="form"
					v-model="valid"
					ref="form"
					@submit.prevent="signIn"
				>
					<v-row>
						<v-col cols="12" md="6">
							<BaseInput
								v-model="user.email"
								id="email"
								:type="'email'"
								label="Email"
								:required="true"
								:counter="false"
							/>
						</v-col>
						<v-col cols="12" md="6">
							<BaseInput
								v-model="user.password"
								id="password"
								:type="'password'"
								label="Password"
								:required="true"
								:counter="false"
								:novalidate="true"
							/>
						</v-col>
					</v-row>
					<div class="center">
						<v-btn class="mr-4 sign-in" color="primary" type="submit">
							Sign In
						</v-btn>
					</div>
				</v-form>
			</v-col>
			<v-row class="button-row" align="center" justify="center">
				<v-btn
					v-for="button in buttons"
					:key="button.text"
					class="ma-2"
					depressed
					:color="button.color"
				>
					{{ button.text }}
				</v-btn>
			</v-row>
			<v-col class="mb-5" cols="12">
				<h2 class="headline font-weight-bold mb-3">Important Links</h2>

				<v-row justify="center">
					<a
						v-for="(link, i) in importantLinks"
						:key="i"
						:href="link.href"
						class="subheading mx-3"
						target="_blank"
					>
						{{ link.text }}
					</a>
				</v-row>
			</v-col>

			<v-col class="mb-5" cols="12">
				<h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

				<v-row justify="center">
					<a
						v-for="(eco, i) in ecosystem"
						:key="i"
						:href="eco.href"
						class="subheading mx-3"
						target="_blank"
					>
						{{ eco.text }}
					</a>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
// import * as auth from '../services/authService';

export default {
	name: 'Home',

	data: () => ({
		valid: false,
		buttons: [
			{ color: 'primary', text: 'Primary' },
			{ color: 'secondary', text: 'Secondary' },
			{ color: 'accent', text: 'Accent' },
			{ color: 'error', text: 'Error' },
		],
		user: {
			email: '',
			password: '',
		},
		ecosystem: [
			{
				text: 'vuetify-loader',
				href: 'https://github.com/vuetifyjs/vuetify-loader',
			},
			{
				text: 'github',
				href: 'https://github.com/vuetifyjs/vuetify',
			},
			{
				text: 'awesome-vuetify',
				href: 'https://github.com/vuetifyjs/awesome-vuetify',
			},
		],
		importantLinks: [
			{
				text: 'Documentation',
				href: 'https://vuetifyjs.com',
			},
			{
				text: 'Chat',
				href: 'https://community.vuetifyjs.com',
			},
			{
				text: 'Made with Vuetify',
				href: 'https://madewithvuejs.com/vuetify',
			},
			{
				text: 'Twitter',
				href: 'https://twitter.com/vuetifyjs',
			},
			{
				text: 'Articles',
				href: 'https://medium.com/vuetify',
			},
		],
		whatsNext: [
			{
				text: 'Explore components',
				href: 'https://vuetifyjs.com/components/api-explorer',
			},
			{
				text: 'Select a layout',
				href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
			},
			{
				text: 'Frequently Asked Questions',
				href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
			},
		],
	}),
	methods: {
		signIn() {
			this.$refs.form.validate();
			if (this.valid) {
				console.log(this.user);
				// auth.signIn(this.user);
			}
		},
	},
};
</script>
<style lang="scss" scoped>
.form {
	max-width: 750px;
	text-align: left;
	margin: auto;
}
</style>
