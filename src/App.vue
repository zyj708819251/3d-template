<template>
	<div id="app">
		<router-view />
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
		this.$zyjdialog.subPop({
			content: hello,
			id: 'hello',
			initWidth: 450,
			initHeight: 450,
			left: 200,
			top: 200,
			options: {
				closeCallback: this.close
			},
			dialogData: { key: '你好', data: '111' }
		});
		// this.drawMy3d();
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
		init() {}
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
