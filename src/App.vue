<template>
	<div id="app">
		<router-view class="container" />
		<!-- 渲染三维div -->
		<div id="my3d"></div>
	</div>
</template>
<script>
import hello from '@com/HelloWorld';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
	data() {
		return {};
	},
	computed: {
		...mapState('qyh', {
			show: 'show'
		}),
		...mapGetters('qyh', {
			showAddDw: 'showAddDw'
		})
	},
	mounted() {
		
		// this.$zyjdialog.openPop({
		// 	content: hello,
		// 	id: 'hello',
		// 	initWidth: 450,
		// 	initHeight: 450,
		// 	right: 200,
		// 	top: 200,
		// 	options: {
		// 		closeCallback: this.close
		// 	},
		// 	dialogData: { key: '你好', data: '111' }
		// });
		
		// this.$zyjdialog.openPop({
		// 	content: hello,
		// 	id: 'hello1',
		// 	initWidth: 200,
		// 	initHeight: 200,
		// 	left: 200,
		// 	bottom: 200,
		// 	options: {
		// 		closeCallback: this.close
		// 	},
		// 	dialogData: { key: '你好', data: '222' }
		// });
		
		this.drawMy3d();
		this.updateRemark(1111);
		
		
		console.log(process.env.NODE_ENV)
	},
	methods: {
		...mapActions('qyh', {
			showAction: 'showAction'
		}),
		...mapMutations(['updateRemark']),
		drawMy3d() {
			var that = this;
			var my3d = new rs.View({
				dom: 'my3d',
				render: 'ppapi'
			});
			my3d.draw(that.init);
		},
		init() {
			this.$router.push('/Home');
		}
	}
};
</script>
<style lang="scss">
html,
body,
#app {
	width: 100%;
	height: 100%;
	overflow: hidden;
	.container{
		position: relative;
		z-index: 2;
	}
}
#my3d {
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
}
</style>
