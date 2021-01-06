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
		console.log('我只触发一次')
	},
	activated() {
		console.log('我每次触发一次')	
	},
	deactivated() {
		
	},
	methods: {},
	beforeDestroy() {
		console.log(22222);
	}
};
</script>

<style scoped lang="scss">
.djyl-left {
}
</style>
