<template>
  <!--
    打开
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
      dialogData:{
        //传值
      }
    });
    关闭
    this.$zyjdialog.closePop('hello');
	 -->
  <div
    class="zyj-dialog"
    v-if="zyjDialogFlag"
    data-name="zyj-dialog"
    v-bind:style="{
      width: initWidth + 'px',
      height: initHeight + 'px',
      top: top ? top + 'px' : 'initial',
      left: left ? left + 'px' : 'initial',
      right: right ? right + 'px' : 'initial',
      bottom: bottom ? bottom + 'px' : 'initial',
      zIndex: zIndex
    }"
    :id="'zyj-dialog-' + id"
    v-bind:ref="'zyj-dialog-' + id"
  >
    <component :is="content" :dialogData="dialogData"></component>
  </div>
</template>
<script>
export default {
  name: 'zyj-dialog',
  data() {
    return {
      zyjDialogFlag: false,
      initHeight: '400', //初始化高度
      initWidth: '400', //初始化宽度
      id: 'zyj-dialog', //层级
      top: null, //位置;x
      left: null, //位置：y
      right: null,
      bottom: null,
      content: null, //弹出框内容
      fullScreen: false, //是否全屏
      zIndex: 3, //显示层级
      options: {},
      dialogData: {}
    };
  },
  mounted() {},
  methods: {
    closedialog(e) {
      if (this.options && typeof this.options.closeCallback == 'function') {
        this.options.closeCallback();
      }
      this.zyjDialogFlag = false;
    }
  }
};
</script>
<style lang="scss" scoped>
/* 弹出框 */
.zyj-dialog {
  display: inline-flex;
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  & > div {
    width: 100%;
    height: 100%;
  }
}
</style>
