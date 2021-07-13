import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


window.$rootUrl = window.location.hostname == 'localhost' || window.location.hostname == '127.0.0.1' ?
  'https://10.128.181.16:82/' : window.origin+'/';
Vue.prototype.$rootUrl = window.$rootUrl;

//重置样式
import '@assets/css/reset.css'

// 引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//引用qs
import qs from 'qs'
Vue.prototype.$qs = qs;

// 引入Echarts插件
import Echarts from 'echarts'
Vue.prototype.$echarts = Echarts

// 引入全局过滤器
import '@/utils/filter'
Vue.config.productionTip = false

//引入工具类
import utils from '@utils/utils.js'
Vue.prototype.$utils = utils

//引入回调JS
import publicJs from '@utils/publicJs'
Vue.prototype.$public = publicJs;
window.$public = publicJs;

//弹框
import dialogMessage from '@com/Dialog/Dialog.js';
Vue.prototype.$zyjdialog = dialogMessage.installDialog();

//拖动
import zyjdrag from '@utils/drag.js'
import  '@utils/mydrag.js'

//bus
import bus from '@utils/bus.js';
Vue.prototype.$bus =bus;

//轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)


window.$vue=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
