import Vue from 'vue'
import { DatePicker, Select, Icon } from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import './assets/css/icon.css';
import './components/common/directives';
import "babel-polyfill";
import "ant-design-vue/dist/antd.css";
import Viewer from 'v-viewer'
// import anime from 'animejs'
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css"
// import "../my-theme/index.less"
import sitplayer from 'sitplayer'
import 'sitplayer/dist/sit-player.css'
import contextmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'
// import VueI18n from 'vue-i18n'
import i18n from './i18n/i18n'
import VueDragResize from 'vue-drag-resize'
import dataV from '@jiaminghi/data-view'

// Vue.use(VueI18n);
Vue.use(Viewer)
// Vue.use(anime)
Vue.use(dataV)
Vue.use(contextmenu)
Vue.use(sitplayer)
    // Vue.use(ViewUI);
    // iview样式全局配置
Vue.use(ViewUI, {
    transfer: true,
    size: 'large',
    capture: false,
    select: {
        arrow: 'md-arrow-dropdown',
        arrowSize: 20
    }
});
Vue.component(DatePicker.name, DatePicker)
Vue.component(Select.name, Select)
Vue.component(Icon.name, Icon)
Vue.component('vue-drag-resize', VueDragResize)
Vue.config.productionTip = false
Vue.use(ElementUI, {
    size: 'small'
});
Vue.prototype.$axios = axios;

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    } else {
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        } else {
            next();
        }
    }
})

// const messages = {
//     zh: {
//       message: {
//         hello: '好好学习，天天向上！'
//       }
//     },
//     en: {
//       message: {
//         hello: 'good good study, day day up!'
//       }
//     }
// }

// const i18n = new VueI18n({
//     locale: 'zh', // 语言标识
//     messages
// })

// const i18n = new VueI18n({
//     locale: 'en', // 语言标识
//     messages: {
//         'zh': require('./lang/zh'),
//         'en': require('./lang/en')
//     }
// })

// const i18n = new VueI18n({
//     locale: localStorage.getItem('locale') || 'zh',
//     messages: {
//         'zh': require('./i18n/langs/zh'),
//         'en': require('./i18n/langs/en')
//     }
// })

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app')