import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';

//引入图标
import './assets/font/iconfont.css';
import { Icon } from "vant";
Vue.use(Icon);

//引入animate.css
import animated from 'animate.css';
Vue.use(animated)

//引入swiper的css
import 'swiper/css/swiper.css';

import { AddressEdit } from 'vant';
Vue.use(AddressEdit);


import VueVideoPlayer from 'vue-video-player'

//引入视频播放插件vue-video-player
// require videojs style
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)

Vue.use(Vant);

//引入axios
import axios from "axios";
Vue.prototype.$axios = axios;
//配置默认url
axios.defaults.baseURL = 'http://127.0.0.1:3000';

//引入jsonp
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

//引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 引入渐进式加载图片插件
import progressive from 'progressive-image/dist/vue';
Vue.use(progressive,{
  removePreview: true,
  scale: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


