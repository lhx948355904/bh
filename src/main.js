import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from "mint-ui"
import 'mint-ui/lib/style.css'
import "lib-flexible/flexible"
import "@/assets/reset.css"
import echarts from "echarts"
// import Vis from 'vis'
// import NeoVis from 'neovis.js';
// import "@/assets/vis-network.min.css"
// import "vis-network/dist/dist/vis-network.min.css"

Vue.prototype.$echarts = echarts;
// Vue.prototype.$NeoVis = NeoVis;

Vue.use(Mint)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
