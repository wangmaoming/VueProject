export default {
    path: '/goodscategoryman',
    // component: () => import('../components/category-man/category-man.vue'),
    component(resolve) {
        require(['../components/category-man/category-man.vue'], resolve);
    },
    children: [
        {
            path: '/goodscategoryman',
            // component: () => import('../components/category-man/man-all/man-all.vue'),
            component(resolve) {
                require(['../components/category-man/man-all/man-all.vue'], resolve);
            },
            children: [
                {
                    path: '/goodscategoryman',
                    // component: () => import('../components/category-man/man-all/man-all-syn.vue')
                    component(resolve) {
                        require(['../components/category-man/man-all/man-all-syn.vue'], resolve);
                    }
                },
                {
                    path: 'new',
                    // component: () => import('../components/category-man/man-all/man-all-new.vue')
                    component(resolve) {
                        require(['../components/category-man/man-all/man-all-new.vue'], resolve);
                    }
                },
                {
                    path: 'saleMount',
                    // component: () => import('../components/category-man/man-all/man-all-saleMount.vue')
                    component(resolve) {
                        require(['../components/category-man/man-all/man-all-saleMount.vue'], resolve);
                    }
                },
                {
                    path: 'price',
                    // component: () => import('../components/category-man/man-all/man-all-price.vue')
                    component(resolve) {
                        require(['../components/category-man/man-all/man-all-price.vue'], resolve);
                    }
                },
            ]
        },
        {
            path: 'goodscategoryman2',
            // component: () => import('../components/category-man/man-zhenzhishan/man-zhenzhishan.vue'),
            component(resolve) {
                require(['../components/category-man/man-zhenzhishan/man-zhenzhishan.vue'], resolve);
            },
            children: [
                {
                    path: '/goodscategoryman/goodscategoryman2',
                    // component: () => import('../components/category-man/man-zhenzhishan/man-zhenzhishan-syn.vue')
                    component(resolve) {
                        require(['../components/category-man/man-zhenzhishan/man-zhenzhishan-syn.vue'], resolve);
                    },
                }
            ]
        },
        {
            path: 'goodscategoryman3',
            // component: () => import('../components/category-man/man-Tshirt/man-Tshirt.vue'),
            component(resolve) {
                require(['../components/category-man/man-Tshirt/man-Tshirt.vue'], resolve);
            },
            children: [
                {
                    path: '/goodscategoryman/goodscategoryman3',
                    component(resolve) {
                        require(['../components/category-man/man-Tshirt/man-Tshirt-syn.vue'], resolve);
                    },
                    // component: () => import('../components/category-man/man-Tshirt/man-Tshirt-syn.vue')
                }
            ]
        },
        {
            path: 'goodscategoryman4',
            // component: () => import('../components/category-man/man-shirt/man-shirt.vue'),
            component(resolve) {
                require(['../components/category-man/man-shirt/man-shirt.vue'], resolve);
            },
            children: [
                {
                    path: '/goodscategoryman/goodscategoryman4',
                    component(resolve) {
                        require(['../components/category-man/man-shirt/man-shirt-syn.vue'], resolve);
                    }
                    // component: () => import('../components/category-man/man-shirt/man-shirt-syn.vue')
                }
            ]
        },
        {
            path: 'goodscategoryman5',
            // component: () => import('../components/category-man/man-coat/man-coat.vue'),
            component(resolve) {
                require(['../components/category-man/man-coat/man-coat.vue'], resolve);
            },
            children: [
                {
                    path: '/goodscategoryman/goodscategoryman5',
                    // component: () => import('../components/category-man/man-coat/man-coat-syn.vue')
                    component(resolve) {
                        require(['../components/category-man/man-coat/man-coat-syn.vue'], resolve);
                    }
                }
            ]
        },
    ]
}