<template>
	<div class="home">
		<p>首页</p>
		<myswiper></myswiper>
		<numberCount class="text" :height="100" :value="n" :interval="2000" :loop="true"></numberCount>
		<listScroll :listOption="option" :listData="list">
			<div class="listbox">
				<div class="item" v-for="(item, index) in list">{{ item }}</div>
			</div>
		</listScroll>
	</div>
</template>

<script>
import myswiper from '@com/Swiper';
import numberCount from '@com/Number';
import listScroll from '@com/ListScroll';

export default {
	name: 'home',
	components: {
		myswiper,
		numberCount,
		listScroll
	},
	data() {
		return {
			n: 17169,
			list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			option: {
				loop: true,
				interval: 3000,
				scrollHeight: 100
			}
		};
	},
	mounted() {},
	methods: {},
	beforeDestroy() {}
};
</script>

<style lang="scss" scoped>
.home {
}
.text {
	font-size: 60px;
}
.listbox {
	height:500px;
	.item {
		height: 100px;
		line-height: 100px;
		&:nth-child(2n) {
			background: rgba(255, 0, 0, 0.2);
		}
		&:nth-child(2n + 1) {
			background: rgba(0, 255, 0, 0.2);
		}
	}
}
</style>
