import { createRouter, createWebHashHistory } from "vue-router"
import Landing from '../pages/Landing.vue'
import Story from '../pages/Story.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: Landing,
        },
        {
            path: "/story",
            component: Story,
        },
        // {
        //     path: "/adminlogin",
        //     name: "adminlogin",
        //     components: {
        //         body: () => import('../views/Main/body/AdminLogin.vue')
        //     },
        //     beforeEnter: () => {
        //         const admin = useAdminStore()
        //         if (admin.isLogin) {
        //             return { path: '/admin' }
        //         }
        //         else return true
        //     }
        // },
        // {
        //     path: "/admin",
        //     name: "admin",
        //     components: {
        //         body: () => import('../views/Main/body/Admin.vue')
        //     },
        //     beforeEnter: () => {
        //         const admin = useAdminStore()
        //         if (admin.isLogin) {
        //             return true
        //         }
        //         else return { path: '/adminlogin' }
        //     }
        // }
    ],
})

export default router