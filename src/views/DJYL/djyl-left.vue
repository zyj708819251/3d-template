<template>
	<div class="djyl-left">党建引领左侧</div>
</template>

<script>
export default {
	name: 'djyl-left',
	data() {
		return {};
	},
	mounted() {
		this.$bus.$on('changValue', (data) => {
			console.log(data+'=========');
		});
	},
	methods: {},
	beforeDestroy() {
		console.log(22222);
	}
};
</script>

<style scoped lang="scss">
.djyl-left {
	width: 700px;
	background: #000 !important;
}
</style>
