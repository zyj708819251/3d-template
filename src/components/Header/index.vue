<template>
  <div class="top-header">
    <ul class="nav-list">
      <li class="nav-item" v-for="(item, index) in navList" :key="index">
        <router-link @click.native="toggleNav(item, index)" :to="{ path: item.path}" v-text="item.name"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex';
export default {
  name: 'top-header',
  data() {
    return {
      navList: [
        {
          name: '今日白云',
          path: '/JRBY'
        },
        {
          name: '党建引领',
          path: '/DJYL'
        },
        {
          name: '政令畅通',
          path: '/ZLCT'
        },
        {
          name: '有呼必应',
          path: '/YHBY'
        },
        {
          name: '指挥调度',
          path: '/ZHDD'
        },
        {
          name: '工作平台',
          path: '/GZPT'
        },
        {
          name: '智慧治理',
          path: '/ZHZL'
        }
      ],
      nowNavIndex: null
    };
  },
  computed: {},
  mounted() {},
  methods: {
    toggleNav(item, index) {
      var that = this;
      this.$router.push(
        {
          path: item.path,
          query: {
            time: new Date().getTime()
          }
        },
        () => {},
        e => {
          console.log('路由报错');
        }
      );
      this.nowNavIndex = index;
    }
  }
};
</script>

<style scoped lang="scss">
.top-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  width: 100%;
  height:$navHeight;
  .nav-list {
    @include flex;
    .nav-item {
      padding: 0 10px;
      .router-link-active {
        background: #f00;
        color: aqua;
      }
    }
  }
}
</style>
