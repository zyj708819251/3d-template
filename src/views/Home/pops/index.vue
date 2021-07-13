<template>
	<div class="hello">
		<div class="zyj-dialog-header" v-zyjdrag>
			<div class="zyj-dialog-title">1111111111</div>
			<div class="zyj-dialog-close" @click="closePop">X</div>
		</div>
		<div class="pop-body">
			<iframe ref="iframeUrl" :src="$rootUrl+'baiyun/districtLevel/pages/SZ/a/a.html'"></iframe>
		</div>
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
			if(this.$refs.iframeUrl){
				this.closeIframeUrl()
			}
		},
		closeIframeUrl(){
			var obj = this.$refs.iframeUrl;
			obj.contentWindow.resafety_onclose && obj.contentWindow.resafety_onclose();
		}
	},
	created() {},
	beforeDestroy() {
		this.closeIframeUrl();
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
