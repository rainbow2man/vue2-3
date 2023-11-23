import VueRouter from 'vue-router';

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: () => import('../pages/about.vue'),
        },
        {
            path: '/home',
            component: () => import('../pages/home.vue'),
            children: [
                {
                    path: 'news',
                    component: () => import('../pages/news.vue')
                },
                {
                    path: 'news2',
                    component: () => import('../pages/news2.vue'),
                    children: [
                        {
                            path: 'detail',
                            component: () => import('../pages/detail.vue')
                        }
                    ]
                }
            ]
        },
    ]
})

