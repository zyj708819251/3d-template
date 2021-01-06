<template>
	<div class="mySwiper">
		<swiper class="swiper" :options="swiperOption">
			<swiper-slide>Slide 1</swiper-slide>
			<swiper-slide>Slide 2</swiper-slide>
			<swiper-slide>Slide 3</swiper-slide>
			<swiper-slide>Slide 4</swiper-slide>
			<swiper-slide>Slide 5</swiper-slide>
			<swiper-slide>Slide 6</swiper-slide>
			<swiper-slide>Slide 7</swiper-slide>
			<swiper-slide>Slide 8</swiper-slide>
			<swiper-slide>Slide 9</swiper-slide>
			<swiper-slide>Slide 10</swiper-slide>
		</swiper>
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	</div>
</template>

<script>
export default {
	name: 'swiper-example-multiple-slides-per-biew',
	title: 'Multiple slides per view',
	data() {
		return {
			swiperOption: {
				direction: 'horizontal',
				loop: true, 
				autoplay: true,
				slidesPerView: 3,
				spaceBetween: 30,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
			}
		};
	}
};
</script>

<style lang="scss" scoped>
	.mySwiper{
		height: 500px;
		position: relative;
		@include flex;
		justify-content: center;
		.swiper-container{
			@include width(100%,100px);
			height: 100%;
			.swiper-slide{
				background: #007AFF;
			}
		}
		.swiper-button-prev:focus{
			outline:none
		}
		.swiper-button-next{
			&:foucs{
				
			outline:none !important;
			}
		}
		.swiper-slide{height: auto;}
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
