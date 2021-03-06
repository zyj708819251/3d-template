import Vue from 'vue'
import router from '@/router'
import store from '@/store'

import Dialog from '@com/Dialog/Dialog.vue'
let component = null;
let components = [];
export default {
	installDialog() {
		return {
			subPop: this.installSubPop.bind(this),
			closePop: this.closeSubPop.bind(this)
		}
	},

	/* 弹出框
	 *  包含：子弹出窗
	 *  参数：
	 *  options={
	 *      id：string，唯一标识
	 *      initWidth: string（'400px'），初始化宽度（可缺）（此参数在手机浏览器上不生效，采用固定值：96%）
	 *      initHeight: string，初始化高度（可缺）
	 * 	    dialogData：object 传参数
	 *      options：{
	 *            closeCallback：func，点击窗口关闭事件的回调函数（可缺）
	 *    }
	 *  }
	 */
	installSubPop(options) {
		this.initBase(options);
	},
	closeSubPop(id) {
		for (var i = 0; i < components.length; i++) {
			if (components[i].id == id) {
				components[i].zyjDialogFlag = false
				break;
			}
		}
	},
	initBase(options) {
		var message = Vue.extend(Dialog)
		component = new message({
			router,
			store,
			data: options
		}).$mount();
		components.push(component);
		let pop = document.getElementById('zyj-dialog-' + options.id);
		pop && document.querySelector('#app').removeChild(pop);
		document.querySelector('#app').appendChild(component.$el)
		component.zyjDialogFlag = true;
	}
}
