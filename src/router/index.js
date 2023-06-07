import { createRouter, createWebHashHistory } from "vue-router"
import Landing from '../pages/Landing.vue'
import Wechat from '../pages/Wechat.vue'
import WishPool from '../pages/WishPool.vue'
import Story from '../pages/Story.vue'
import StoryPage1 from '../pages/StoryPages/StoryPage1.vue'
import StoryPage2 from '../pages/StoryPages/StoryPage2.vue'
import StoryPage3 from '../pages/StoryPages/StoryPage3.vue'
import StoryPage4 from '../pages/StoryPages/StoryPage4.vue'
import StoryPage5 from '../pages/StoryPages/StoryPage5.vue'
import StoryPage6 from '../pages/StoryPages/StoryPage6.vue'
import { isLogin } from "../utils/tokenAndWxlogin"
import { isLogin as adminIsLogin } from "../utils/admin"
import { checkgraduate } from "../service/axios"
import AdminLogin from "../pages/AdminPages/AdminLogin.vue"
import AdminManage from "../pages/AdminPages/AdminManage.vue"

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
            meta: {
                title: "请查收你的毕业报告..."
            },
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
            ],
            beforeEnter: () => {
                if (isLogin() && checkgraduate()) return true
                else return { path: '/' }
            }
        },
        {
            path: "/wish",
            component: WishPool,
            meta: { title: "许个愿吧QAQ" },
            beforeEnter: () => {
                if (isLogin()) return true
                else return { path: '/' }
            }
        },
        {
            path: "/wechat",
            component: Wechat,
            meta: {
                title: "请扫码o"
            }
        },
        {
            path: "/adminlogin",
            component: AdminLogin,
            meta: {
                title: "请登录"
            }, 
            // beforeEnter: () => {
            //     if (!adminIsLogin()) return true
            //     else return { path: '/adminmanage' }
            // }
        },
        {
            path: "/adminmanage",
            component: AdminManage,
            meta: {
                title: "后台管理"
            },
            beforeEnter: () => {
                if (adminIsLogin()) return true
                else return { path: '/adminlogin' }
            }
        }
    ],
})


router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
export default router