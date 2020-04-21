export default {
    path: '/cart',
    name: '购物车',
    // component: () => import('../views/cart.vue')
    component(resolve){
        require(['../views/cart.vue'],resolve);
    }
}