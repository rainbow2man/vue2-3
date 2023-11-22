import Vue from 'vue'
import App from './App.vue'
// vuex相关
import store from './store'
import VueRouter from 'vue-router'
// 引入路由
import router from './router'

Vue.config.productionTip = false
Vue.use(VueRouter);
new Vue({
    render: h => h(App),
    store,
    beforeCreate() {
        //全局事件总线
        Vue.prototype.$bus = this;
    },
    router: router
}).$mount('#app')
