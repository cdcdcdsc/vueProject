// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
//import VueLazyload from 'vue-lazyload/vue-lazyload-next'
import App from './App'

Vue.use(VueRouter)
Vue.use(VueResource)
//Vue.use(VueLazyload)
Vue.use(VueLazyload, {
//error: 'dist/error.png',
//loading: 'dist/loading.gif',
//try: 3 // default 1
preLoad: 1.3,
attempt: 1
//fade: true,
////nohori: true,
////speed: 20,
})
Vue.config.productionTip = false


import Cart from './page/cart/cart'
import Discount from './page/discount/discount'
import Global from './page/global/global'
import Mine from './page/mine/mine'
import Warehouse from './page/warehouse/warehouse'
import Goods from './page/goods/goods'


//定义路由规则
const routes = [
	{ path : '/', component : Discount },
	{ path : '/cart', component : Cart },
	{ path : '/discount', component : Discount },
	{ path : '/global', component : Global },
	{ path : '/mine', component : Mine },
	{ path : '/warehouse', component : Warehouse },
	{ path : '/goods', component : Goods},
]

//创建router实例
const router = new VueRouter ({
	routes
})

//Vue.filter("num",function(value){
//	return Number(value);
//});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  //将router添加到vue中
	router
})


Vue.prototype.goodsArr = [];
//Vue.prototype.count1 = 0;
//Vue.prototype.goodArr = [];
//Vue.prototype.goodsMap = new Map();
