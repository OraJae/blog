import "@styles/index.scss";
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "vditor/dist/index.css"
import VueRouter from 'vue-router'
import router from './router'
import plugins from './plugins'


Vue.use(plugins);
Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
