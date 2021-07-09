<!-- 
	import listScroll from '@com/ListScroll'
	
	<listScroll :listOption="option" :listData="list">
			  <div class="listbox">
				  <div class="item" v-for="(item,index) in list">{{item}}</div>
			  </div>
	</listScroll>
	
	list:[
		1,2,3,4,5,6,7,8,9
	],
	option:{
		loop:true,
		interval:2000,
		scrollHeight:30
	}
	
 -->

<template>
	<div class="zyj-list-box" :style="styleVar">
		<div ref="zyjAnimateBox" class="zyj-animate-box" :class="{ marquee_top: animate }" @mouseenter="mouseenter" @mouseleave="mouseleave"><slot></slot></div>
	</div>
</template>

<script>
export default {
	props: {
		listData: {
			type: Array,
			default: () => {
				return [];
			}
		},
		listOption: {
			type: Object,
			default: () => {
				return {
					loop: false,
					interval: 2000,
					scrollHeight: 30
				};
			}
		}
	},
	data() {
		return {
			animate: false,
			timerListScroll: null
		};
	},
	computed: {
		styleVar() {
			return {
				'--box-height': -this.listOption.scrollHeight + 'px'
			};
		}
	},
	mounted() {
		if (this.listOption.loop) {
			this.timerListScroll = setInterval(() => {
				this.showMarquee();
			}, this.listOption.interval);
		}
	},
	methods: {
		showMarquee: function() {
			this.animate = true;
			setTimeout(() => {
				this.listData.push(this.listData[0]);
				this.listData.shift();
				this.animate = false;
			}, 300);
		},
		mouseenter() {
			if (this.listOption.loop) {
				clearInterval(this.timerListScroll);
			}
		},
		mouseleave() {
			if (this.listOption.loop) {
				this.timerListScroll = setInterval(this.showMarquee, this.listOption.interval);
			}
		}
	},
	beforeDestroy() {
		this.$once('hook:beforeDestroy', () => {
			clearInterval(this.timerListScroll);
			this.timerListScroll = null;
		});
	}
};
</script>

<style lang="scss" scoped>
.zyj-list-box {
	overflow: hidden;
	.zyj-animate-box {
		overflow: auto;
		&::-webkit-scrollbar {
			width: 0;
			height: 0;
		}
		&.marquee_top {
			transition: all 0.5s;
			margin-top: var(--box-height);
		}
	}
}
</style>
