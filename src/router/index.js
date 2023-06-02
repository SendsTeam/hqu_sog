import { createRouter, createWebHashHistory } from "vue-router"
import Landing from '../pages/Landing.vue'

import Story from '../pages/Story.vue'
import StoryPage1 from '../pages/StoryPages/StoryPage1.vue'
import StoryPage2 from '../pages/StoryPages/StoryPage2.vue'
import StoryPage3 from '../pages/StoryPages/StoryPage3.vue'
import StoryPage4 from '../pages/StoryPages/StoryPage4.vue'
import StoryPage5 from '../pages/StoryPages/StoryPage5.vue'
import StoryPage6 from '../pages/StoryPages/StoryPage6.vue'

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
                },
                {
                    path: "3",
                    component: StoryPage3
                },
                {
                    path: "4",
                    component: StoryPage4
                },
                {
                    path: "5",
                    component: StoryPage5
                },
                {
                    path: "6",
                    component: StoryPage6
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