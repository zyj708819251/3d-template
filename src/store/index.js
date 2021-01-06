import Vue from 'vue'
import Vuex from 'vuex'
import qyh from './modules/qyh'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		remark:0
	},
	mutations:{
		updateRemark(state,data){
			state.remark=data;
		}
	},
	modules: {
		qyh
	}
})
