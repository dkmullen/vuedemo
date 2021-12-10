<template>
	<div class="text-center">
		<v-dialog v-model="dialog" hide-overlay persistent width="450">
			<v-card color="primary" dark>
				<v-card-text>
					{{ message }}
					<v-progress-linear
						indeterminate
						color="white"
						class="mb-0"
					></v-progress-linear>
				</v-card-text>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	name: 'InfoDialog',
	props: ['message', 'dialog'],

	data() {
		return {};
	},
	methods: {
		action() {
			this.$emit('action', true);
		},
		cancel() {
			this.$emit('cancel', true);
		},
	},
};
</script>

<style lang="scss" scoped>
// .v-card {
// 	background-color: white !important;
// }
// .title-text {
// 	margin-bottom: 0;
// }
</style>
