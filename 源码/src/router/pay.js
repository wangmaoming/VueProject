export default{
    path: '/pay',
    name: '提交订单',
    // component: ()=>import('../components/pay/pay.vue')
    component(resolve) {
        require(['../components/pay/pay.vue'], resolve);
    },
}