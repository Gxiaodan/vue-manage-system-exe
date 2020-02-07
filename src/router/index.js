import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/iview',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            redirect: 'noredirect',
            name: 'iview',
            meta: {
                title: 'iview',
                icon: 'international'
            },
            children: [{
                    path: '/iview01',
                    component: resolve => require(['../components/page/iviewExe/child01.vue'], resolve),
                    meta: { title: 'iview练习页面' }
                },
                {
                    path: '/iviweBasic',
                    component: resolve => require(['../components/page/iviewExe/iview_basic.vue'], resolve),
                    meta: { title: 'iview_基础组件' }
                },
                {
                    path: '/iviewLayout',
                    component: resolve => require(['../components/page/iviewExe/layout.vue'], resolve),
                    meta: { title: 'iview_布局' }
                },
                {
                    path: '/navigation',
                    component: resolve => require(['../components/page/iviewExe/navigation.vue'], resolve),
                    meta: { title: 'iview_导航' }
                },
                {
                    path: '/iview_form',
                    component: resolve => require(['../components/page/iviewExe/form.vue'], resolve),
                    meta: { title: 'iview_表单' }
                },
                {
                    path: '/view',
                    component: resolve => require(['../components/page/iviewExe/view.vue'], resolve),
                    meta: { title: 'iview_表单' }
                }
            ]
        },
        {
            path: '/dataV',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            redirect: 'noredirect',
            name: 'dataV',
            meta: {
                title: 'dataV',
                icon: 'international'
            },
            children: [{
                    path: '/dataV01',
                    component: resolve => require(['../components/page/dataV/child01.vue'], resolve),
                    meta: { title: 'dataV练习页面' }
                },
                {
                    path: '/dataV02',
                    component: resolve => require(['../components/page/dataV/form.vue'], resolve),
                    meta: { title: 'dataV练习页面' }
                }
            ]
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children: [{
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/icon',
                    component: resolve => require(['../components/page/Icon.vue'], resolve),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tabs',
                    component: resolve => require(['../components/page/Tabs.vue'], resolve),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve),
                    meta: { title: 'markdown编辑器' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 拖拽Dialog组件
                    path: '/dialog',
                    component: resolve => require(['../components/page/DragDialog.vue'], resolve),
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/Permission.vue'], resolve),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: resolve => require(['../components/page/404.vue'], resolve),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: resolve => require(['../components/page/403.vue'], resolve),
                    meta: { title: '403' }
                },
                {
                    path: '/exe01',
                    component: resolve => require(['../components/page/Dxd-exe/index.vue'], resolve),
                    meta: { title: '练习页面' }
                },
                {
                    path: '/exe02',
                    component: resolve => require(['../components/page/Dxd-exe/components/child03——animation.vue'], resolve),
                    meta: { title: '动画练习页面' }
                },
                {
                    path: '/exe04',
                    component: resolve => require(['../components/page/Dxd-exe/components/child04-vViewer.vue'], resolve),
                    meta: { title: 'v-viewer练习页面' }
                },
                {
                    path: '/video-exe',
                    component: resolve => require(['../components/page/Dxd-exe/components/video-exe.vue'], resolve),
                    meta: { title: 'video练习页面' }
                },
                {
                    path: '/print',
                    component: resolve => require(['../components/page/Dxd-exe/components/print.vue'], resolve),
                    meta: { title: 'print打印预览练习页面' }
                },
                {
                    path: '/vueDrag',
                    component: resolve => require(['../components/page/Dxd-exe/components/vue-drag.vue'], resolve),
                    meta: { title: 'vue-drag-resize练习页面' }
                },
                {
                    path: '/ele_slider',
                    component: resolve => require(['../components/page/Dxd-exe/components/ele_slider.vue'], resolve),
                    meta: { title: 'vue-ele_slider练习页面' }
                },
                {
                    path: '/bicycleSlider',
                    component: resolve => require(['../components/page/Dxd-exe/bicycleSlider.vue'], resolve),
                    meta: { title: 'bicycleSlider练习页面' }
                },
                {
                    path: '/scrollAnimate',
                    component: resolve => require(['../components/page/Dxd-exe/components/scrollAnimate.vue'], resolve),
                    meta: { title: 'scrollAnimate练习页面' }
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})