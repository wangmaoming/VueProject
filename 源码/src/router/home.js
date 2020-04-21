
export default [
    {
        path: '/home',
        name: '首页',
        // component: () => import('../views/home.vue')
        component(resolve) {
            require(['../views/home.vue'], resolve);
        }
    },
    {
        path: '/search',
        name: '搜索页',
        // component: ()=> import('../components/public/search.vue')
        component(resolve) {
            require(['../components/public/search.vue'], resolve);
        }
    }
]