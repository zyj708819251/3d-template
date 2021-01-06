<template>
	<div class="hello">
		<div class="zyj-dialog-header" v-zyjdrag>
			<div class="zyj-dialog-title">1111111111</div>
			<div class="zyj-dialog-close" @click="closePop">X</div>
		</div>
		<div class="pop-body">{{ dialogData }}</div>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		dialogData: {
			type: Object,
			default: {}
		}
	},
	methods: {
		closePop() {
			this.$parent.closedialog();
		},
	},
	created() {},
	beforeDestroy() {
		alert(0);
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
	background: rgba(255, 0, 0, 0.2);
	overflow: auto;
}
</style>
