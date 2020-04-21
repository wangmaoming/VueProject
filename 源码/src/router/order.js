export default {
    path: '/myOrder',
    name: '我的订单',
    component: () => import('../views/myOrder.vue'),
    children: [
        {
            path: 'orderAll',
            name: '全部订单',
            // component: () => import('../components/order/orderAll.vue')
            component(resolve) {
                require(['../components/order/orderAll.vue'], resolve);
            }
        },
        {
            path: 'orderPay',
            name: '未支付',
            // component: () => import('../components/order/orderPay.vue')
            component(resolve) {
                require(['../components/order/orderPay.vue'], resolve);
            }
        },
        {
            path: 'orderGoods',
            name: '未收货',
            // component: () => import('../components/order/orderGoods.vue')
            component(resolve) {
                require(['../components/order/orderGoods.vue'], resolve);
            }
        },
        {
            path: 'orderComplete',
            name: '已完成',
            // component: () => import('../components/order/orderComplete.vue')
            component(resolve) {
                require(['../components/order/orderComplete.vue'], resolve);
            }
        },
        {
            path: 'orderComment',
            name: '已评价',
            // component: () => import('../components/order/orderComment.vue')
            component(resolve) {
                require(['../components/order/orderComment.vue'], resolve);
            }
        }
    ]
}