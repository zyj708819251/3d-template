import Vue from 'vue'
import VueRouter from 'vue-router'
VueRouter.prototype.go = function() {
	this.isBack = true
	window.history.go(-1)
}
Vue.use(VueRouter)
const routes = [{
    path: '/Layout',
    name: 'Layout',
    component: () => import('@com/Layout/index.vue'),
    redirect: "/DJYL",
    children: [{
        path: '/DJYL',
        name: 'DJYL',
        components: {
          'left': () => import('@views/DJYL/djyl-left.vue'),
          'right': () => import('@views/DJYL/djyl-right.vue')
        }
      },
      {
        path: '/JRBY',
        name: 'JRBY',
        components: {
          'left': () => import('@views/JRBY/jrby-left.vue'),
          'right': () => import('@views/JRBY/jrby-right.vue')
        }
      },
      {
        path: '/ZLCT',
        name: 'ZLCT',
        components: {
          'left': () => import('@views/ZLCT/zlct-left.vue'),
          'right': () => import('@views/ZLCT/zlct-right.vue')
        }
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@views/Home/index.vue')
  },
  {
    path: '*',
    redirect: "/",
  }
]

const router = new VueRouter({
  routes
})






router.beforeEach((to, from, next) => {
  if ($('#rightIframe').length || $('#leftIframe').length || $('#secondIframe').length) {
    try {
      var objLeft = document.getElementById('leftIframe')
      objLeft.contentWindow.resafety_onclose && objLeft.contentWindow.resafety_onclose();

      var objRight = document.getElementById('rightIframe')
      objRight.contentWindow.resafety_onclose && objRight.contentWindow.resafety_onclose();
    } catch (error) {

    }
  }
  $('.handleCreateIframeContainer').map((index, item) => {
    try {

      var obj = document.getElementById($(item).attr('id'))
      obj.contentWindow.resafety_onclose && obj.contentWindow.resafety_onclose();
      obj.remove()
    } catch (error) {

    }
  })
  setTimeout(() => {
    next()
  }, 200)

})

export default router
