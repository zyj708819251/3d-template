<template>
  <div class="djyl-top">
	  <button type="button" @click="change('aaaa')">触发</button>
  </div>
</template>

<script>
export default {
  name: 'djyl-top',
  data() {
    return {
		options: [],
		        value: ''
	};
  },
  mounted() {},
  methods: {
	  change(val){
		   this.$bus.$emit('changValue', val)
	  }
  },
  beforeDestroy() {}
};
</script>

<style scoped lang="scss">
.djyl-top {
}
</style>
