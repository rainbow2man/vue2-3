import VueRouter from 'vue-router';

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: () => import('../components/about.vue'),
        },
        {
            path: '/home',
            component: () => import('../components/home.vue'),
        },
    ]
})

