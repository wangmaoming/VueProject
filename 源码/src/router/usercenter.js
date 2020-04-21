export default [
    {
        path: '/usercenter',
        name: '用户中心',
        // component: () => import('../views/usercenter.vue')
        component(resolve) {
            require(['../views/usercenter.vue'], resolve);
        }
    },
    {
        path: '/settings',
        name: '设置',
        // component: () => import('../components/usercenter/settings.vue')
        component(resolve) {
            require(['../components/usercenter/settings.vue'], resolve);
        }
    },
    {
        path: '/address',
        name: '收货地址',
        // component: () => import('../components/usercenter/address.vue')
        component(resolve) {
            require(['../components/usercenter/address.vue'], resolve);
        }
    },
    {
        path: '/addAddress',
        name: '添加地址',
        // component: () => import('../components/usercenter/addAddress.vue')
        component(resolve) {
            require(['../components/usercenter/addAddress.vue'], resolve);
        }
    },
    {
        path: '/editAddress',
        name: '编辑地址',
        // component: () => import('../components/usercenter/editAddress.vue')
        component(resolve) {
            require(['../components/usercenter/editAddress.vue'], resolve);
        }
    },
    {
        path: '/collect',
        name: '收藏夹',
        // component: () => import('../components/usercenter/collect.vue')
        component(resolve) {
            require(['../components/usercenter/collect.vue'], resolve);
        }
    },
    {
        path: '/login',
        name: '登录',
        // component: () => import('../components/usercenter/login.vue')
        component(resolve) {
            require(['../components/usercenter/login.vue'], resolve);
        }
    },
    {
        path: '/register',
        name: '注册',
        // component: () => import('../components/usercenter/register.vue')
        component(resolve) {
            require(['../components/usercenter/register.vue'], resolve);
        }
    },
    {
        path: '/discount',
        name: '优惠券',
        // component: () => import('../components/usercenter/discount.vue')
        component(resolve) {
            require(['../components/usercenter/discount.vue'], resolve);
        }
    },
    {
        path: '/editPassword',
        name: '修改用户密码',
        // component: () => import('../components/usercenter/editPassword.vue')
        component(resolve) {
            require(['../components/usercenter/editPassword.vue'], resolve);
        }
    },
    {
        path: '/myComment',
        name: '我的评价',
        // component: () => import('../components/usercenter/myComment.vue')
        component(resolve) {
            require(['../components/usercenter/myComment.vue'], resolve);
        }
    }
]


