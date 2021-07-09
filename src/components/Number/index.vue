<!-- 
	import numberCount from '@com/Number'
	<numberCount class="text" :height="60" :value="n" :interval="2000" :loop="true"></numberCount>
 -->

<template>
	<div class="zyj-num-box" :style="styleVar">
		<p ref="numItem" :data-show="item" v-for="(item, index) in numList" :key="new Date().getTime() + '' + Math.random()">
			<span class="scroll-num">0</span>
			<span class="scroll-num">1</span>
			<span class="scroll-num">2</span>
			<span class="scroll-num">3</span>
			<span class="scroll-num">4</span>
			<span class="scroll-num">5</span>
			<span class="scroll-num">6</span>
			<span class="scroll-num">7</span>
			<span class="scroll-num">8</span>
			<span class="scroll-num">9</span>
			<span class="scroll-num">.</span>
			<span class="scroll-num">,</span>
		</p>
	</div>
</template>

<script>
export default {
	props: {
		// 单个数字高度
		height: {
			type: Number,
			default: 30
		},
		// 字符串类型
		value: {
			type: String | Number,
			default: '0'
		},
		//是否循环显示
		loop: {
			type: Boolean,
			default: false
		},
		//几秒动一次
		interval: {
			type: Number,
			default: 5000
		}
	},
	data() {
		return {
			numList: [],
			nowNumber: '0',
			timerNumScroll: null
		};
	},
	computed: {
		styleVar() {
			return {
				'--box-height': this.height + 'px'
			};
		}
	},
	mounted() {
		this.showDom();
		if (this.loop) {
			this.timerNumScroll = setInterval(() => {
				this.showDom();
			}, this.interval);
		}
	},
	methods: {
		showDom() {
			if (typeof this.value == 'number') {
				this.nowNumber = this.value + '';
			} else {
				this.nowNumber = this.value;
			}
			var numArr = this.nowNumber.split('');
			if (numArr.length < 0) return;
			var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', ','];
			var newArr = [];
			numArr.forEach((v, i) => {
				arr.forEach((item, index) => {
					if (v == item) {
						newArr.push(index);
					}
				});
			});

			this.numList = newArr;
			setTimeout(() => {
				this.showAnimate();
			});
		},
		showAnimate() {
			this.$nextTick(() => {
				this.$refs.numItem.forEach((v, i) => {
					v.style.top = -this.height * v.dataset.show + 'px';
				});
			});
		}
	},
	watch: {
		value: {
			handler(newValue, oldValue) {
				this.$nextTick(() => {
					this.showDom();
				});
			},
			immediate: true
		}
	},
	beforeDestroy() {
		this.$once('hook:beforeDestroy', () => {
			clearInterval(timerNumScroll);
			this.timerNumScroll = null;
		});
	}
};
</script>

<style lang="scss" scoped>
.zyj-num-box {
	height: var(--box-height);
	line-height: var(--box-height);
	overflow: hidden;
	display: inline-flex;
	justify-content: flex-end;
	p {
		display: flex;
		flex-direction: column;
		position: relative;
		top: 0;
		transition: all 2s;
		span {
			display: block;
			height: 100%;
			letter-spacing: 3px;
		}
	}
}
</style>
