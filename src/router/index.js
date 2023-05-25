import { createRouter, createWebHashHistory } from "vue-router"
import Landing from '../pages/Landing.vue'

import Story from '../pages/Story.vue'
import StoryPage1 from '../pages/StoryPages/StoryPage1.vue'
import StoryPage2 from '../pages/StoryPages/StoryPage2.vue'

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
            children: [
                {
                    path: "/story",
                    redirect: "/story/1"
                },
                {
                    path: "1",
                    component: StoryPage1
                },
                {
                    path: "2",
                    component: StoryPage2
                }
            ]
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