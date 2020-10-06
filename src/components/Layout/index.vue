<template>
  <div class="container">
    <headerNav></headerNav>
    <div id="left">
      <transition name="transitionLeft"><router-view name="left" :key="$route.fullPath"></router-view></transition>
    </div>
    <div id="right">
      <transition name="transitionRight"><router-view name="right" :key="$route.fullPath"></router-view></transition>
    </div>
    <div id="bottom"><router-view name="bottom" :key="$route.fullPath"></router-view></div>
    <div id="top"><router-view name="top" :key="$route.fullPath"></router-view></div>
  </div>
</template>

<script>
import headerNav from '@com/Header/index';
export default {
  name: 'layout',
  data() {
    return {};
  },
  components: {
    headerNav
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  #left,
  #right,
  #top,
  #bottom {
    position: fixed;
    z-index: 2;
  }
  #left,
  #right {
    width: $moduleWidth;
    height: $moduleHeight;
    top: $navHeight;
    & > div {
      background: rgba(255, 0, 0, 0.2);
    }
  }
  #left {
    left: 0;
  }
  #right {
    right: 0;
  }
  @keyframes showInLeft {
    0% {
      left: -$moduleWidth;
    }
    100% {
      left: 0;
    }
  }

  @keyframes showInRight {
    0% {
      right: -$moduleWidth;
    }
    100% {
      right: 0;
    }
  }

  .transitionLeft-enter-active,
  .transitionLeft-leave-active {
    transition: all 1s;
  }

  .transitionLeft-enter,
  .transitionLeft-leave {
    transform: translate3d(-100%, 0, 0);
  }

  .transitionRight-enter-active,
  .transitionRight-leave-active {
    transition: all 1s;
  }

  .transitionRight-enter,
  .transitionRight-leave {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
