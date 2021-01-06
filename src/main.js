import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


var basePath = (window.location + '').split('/')[0] + '//' + (window.location + '').split('/')[2] + '/' + (window.location +
  '').split('/')[3];
var rootPath = window.location.hostname == 'localhost' || window.location.hostname == '127.0.0.1' ?
  'https://10.128.181.16:82/' : (window.location +
    '').split('/')[0] + '//' + (window.location + '').split('/')[2] + '/';
window.rootUrl = rootPath;
window.rootUrl1 = 'http://' + window.location.hostname + ':' + 83;
Vue.prototype.$rootUrl = window.rootUrl;
Vue.prototype.$rootUrl1 = window.rootUrl1;

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
import {callbackService} from '@utils/callbackService'
Vue.prototype.$callOldService = callbackService;
window.$public = callbackService;

//弹框
import dialogMessage from '@com/Dialog/Dialog.js';
Vue.prototype.$zyjdialog = dialogMessage.installDialog();

//拖动
import zyjdrag from '@utils/drag.js'

//bus
import bus from '@utils/bus.js';
Vue.prototype.$bus =bus;

//轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)


//生成环境执行全屏
// if (process.env.NODE_ENV === 'production') {
//   window.addEventListener("click", function() {
//     utils.enterFullScreen();
//   });
//   utils.forbidCtrlAndHl();
// }


window.$vue=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
