export default [
    {
        path: '/guidepage',
        name: '引导页',
        // component: () => import('../components/public/guidepage.vue')
        component(resolve) {
            require(['../components/public/guidepage.vue'], resolve);
        }
    },
    {
        path: '/advertpage',
        name: '广告页',
        // component: () => import('../components/public/advertpage.vue'),
        component(resolve) {
            require(['../components/public/advertpage.vue'], resolve);
        },
        //在进入广告页之前做个判断
        //判断localStorage里是否有数据guidepage，如果有，即用户不是第一次访问该网站，就之前next()跳到广告页，如果没有，即用户第一次访问该网站，就跳到引导页
        beforeEnter: (to, from, next) => {
            if(!localStorage.guidepage){
                localStorage.guidepage = true;
                next('/guidepage');
            }else{
                next();
            }
        }
    },
    {
        path: '/aboutus',
        name: '关于我们',
        // component: ()=> import('../components/public/aboutus.vue'),
        component(resolve) {
            require(['../components/public/aboutus.vue'], resolve);
        }
    }
]