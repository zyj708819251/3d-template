<template>
	<div class="mySwiper">
		<div class="swiperBox" ref="swiperBox">
			<swiper class="swiper" :options="swiperOption" ref="mySwiper" >
				<swiper-slide data-data="Slide 1"><span>Slide 1</span></swiper-slide>
				<swiper-slide data-data="Slide 2"><span>Slide 2</span></swiper-slide>
				<swiper-slide data-data="Slide 3"><span>Slide 3</span></swiper-slide>
				<swiper-slide data-data="Slide 4"><span>Slide 4</span></swiper-slide>
				<swiper-slide data-data="Slide 5"><span>Slide 5</span></swiper-slide>
				<swiper-slide data-data="Slide 6"><span>Slide 6</span></swiper-slide>
				<swiper-slide data-data="Slide 7"><span>Slide 7</span></swiper-slide>
				<swiper-slide data-data="Slide 8"><span>Slide 8</span></swiper-slide>
				<swiper-slide data-data="Slide 9"><span>Slide 9</span></swiper-slide>
				<swiper-slide data-data="Slide 10"><span>Slide 10</span></swiper-slide>
			</swiper>
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
		<!-- <div class="swiper-pagination"></div> -->
	</div>
</template>

<script>
let vm = null;
export default {
	name: 'swiper-example-multiple-slides-per-biew',
	title: 'Multiple slides per view',
	data() {
		return {
			pre:false,
			next:true,
			swiperOption: {
				direction: 'vertical',
				loop: true,
				autoplay: false,
				slidesPerView: 9,
				spaceBetween: 0,
				slideToClickedSlide: true,
				// freeMode : false,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				centeredSlides: true,
				// watchSlidesProgress: true,
				// pagination: {
				// 	el: '.swiper-pagination',
				// 	clickable: true,
				// 	renderBullet: function(index, className) {
				// 		console.log(index + 1);
				// 		return '<span class="' + className + '">' + (index + 1) + '</span>';
				// 	}
				// },
				on: {
					click: function(event) {
						// 这里有坑，需要注意的是：this 指向的是 swpier 实例，而不是当前的 vue， 因此借助 vm，来调用 methods 里的方法
						// 当前活动块的索引，与activeIndex不同的是，在loop模式下不会将 复制的块 的数量计算在内。
						const realIndex = this.realIndex;
						console.log(this.realIndex)
						console.log(event.target.dataset.data);
						   // this.slideTo(this.realIndex);    
					},

					// setTranslate: function() {
					// 	var slides = this.slides;
					// 	console.log(this);
					// 	for (var i = 0; i < slides.length; i++) {
					// 		var slide = slides.eq(i);
					// 		var progress = slides[i].progress;
					// 		slide.css({ opacity: '', background: '' });
					// 		slide.transform(''); //清除样式
					// 		if(this.activeIndex==0){
					// 			var slide1 = slides.eq(this.activeIndex+19);
					// 			slide1.transform('scale(0.8)');
								
					// 			var slide2 = slides.eq(this.activeIndex +10);
					// 			slide2.transform('scale(0.8)');
					// 		}else if(vm.next){
					// 			var slide1 = slides.eq(this.activeIndex+10);
					// 			slide1.transform('scale(0.8)');
								
					// 			var slide2 = slides.eq(this.activeIndex+1);
					// 			slide2.transform('scale(0.8)');
					// 		}else if(vm.pre){
					// 			var slide1 = slides.eq(this.activeIndex+2);
					// 			slide1.transform('scale(0.8)');
								
					// 			var slide2 = slides.eq(this.activeIndex+1);
					// 			slide2.transform('scale(0.8)');
					// 		}
							
					// 	}
					// },
					// setTransition: function(transition) {
					// 	for (var i = 0; i < this.slides.length; i++) {
					// 		var slide = this.slides.eq(i);
					// 		slide.transition(transition);
					// 	}
					// },
					// slidePrevTransitionEnd:function(){
					// 	vm.pre=true;
					// },
					// slideNextTransitionEnd:function(){
					// 	vm.next=true;
					// },
				}
			}
		};
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.swiper;
		}
	},
	created() {
		vm = this;
	},
	mounted() {
		this.$refs.swiperBox.style.transform='scaleX(1)';
	},
	methods: {
		handleClickSlide(index) {
			console.log(index);
		}
	}
};
</script>

<style lang="scss" scoped>
 // .swiper-slide {
 //      text-align: center;
 //      font-size: 18px;
 //      background: #fff;

 //      /* Center slide text vertically */
 //      display: -webkit-box;
 //      display: -ms-flexbox;
 //      display: -webkit-flex;
 //      display: flex;
 //      -webkit-box-pack: center;
 //      -ms-flex-pack: center;
 //      -webkit-justify-content: center;
 //      justify-content: center;
 //      -webkit-box-align: center;
 //      -ms-flex-align: center;
 //      -webkit-align-items: center;
 //      align-items: center;
	//   transition: 300ms;
 //    }
	// .swiper-slide-active,.swiper-slide-duplicate-active{
 //       transform: scale(1.1);
	// }
.mySwiper {
	width: 1600px;
	background: #000;
	height: 500px;
	position: relative;
	@include flex;
	justify-content: center;
	.swiperBox{
		width: 100%;
		height: 100%;
		background: #000;
		transform: scaleX(0);
		transition: all 2s;
	}
	.swiper-container {
		// @include width(100%, 100px);
		width: 100%;
		height: 100%;
		.swiper-slide {
			background: #007aff;
			&:nth-child(2n){
				background: #005500;
			}
		}
	}
	// .swiper-button-prev:focus,.swiper-button-next:focus {
	// 	outline: none;
	// }
	.swiper-button-prev,.swiper-button-next {
		&:focus{
			outline: none;
		}
	}
	.swiper-button-prev, .swiper-button-next{
		// width: 200px;
		height: 100%;
		margin: 0;
		top: 0;
	}
	.swiper-button-prev{
		left: 0;
	}
	.swiper-button-next{
		right: 0;
	}
	.swiper-slide {
		// width: 165px !important;
		height: auto;
	}
	// .swiper-slide:nth-child(2n) {
	//   width: 300px;
	//   height: 200px;
	// }
	// .swiper-slide:nth-child(3n) {
	//   width: 200px;
	//   height: 100px;
	// }
}
</style>
