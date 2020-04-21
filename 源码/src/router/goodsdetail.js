export default [
    {
        path: '/goodsdetail',
        name: '商品详情',
        // component: () => import('../components/goodsdetail/goodsdetail.vue')
        component(resolve) {
            require(['../components/goodsdetail/goodsdetail.vue'], resolve);
        }
    },
    {
        path: '/comment',
        name: '商品评价',
        // component: ()=> import('../components/goodsdetail/comment.vue')
        component(resolve) {
            require(['../components/goodsdetail/comment.vue'], resolve);
        }
    }
]