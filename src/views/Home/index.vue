<template>
  <div class="home">
	  <p>首页</p>
	  <myswiper></myswiper>
  </div>
	
</template>

<script>
	import myswiper from '@com/Swiper'
export default {
  name: 'home',
  components:{
	  myswiper
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  beforeDestroy() {}
};
</script>

<style lang="scss" scoped>
.home {
}
</style>
