export default {
  path: '/shop',
  name: '分类',
  // component: ()=>import('../views/shop.vue')
  component(resolve) {
    require(['../views/shop.vue'], resolve);
  }
}