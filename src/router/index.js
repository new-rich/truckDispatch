import {createRouter,createWebHistory} from 'vue-router'


const index = () => import("../components/index")
const helloWorld = () => import("../components/HelloWorld")
const menu = () => import("../components/Menu")
const tempsche = () => import("../components/Command/tempSchedule")
const upDown = () => import("../components/Command/upDown")
const qiangCom = () => import("../components/Command/qiangCommand")
const qiangDu = () => import("../components/Command/qiangdu")

const routerHistory = createWebHistory()


const router = createRouter({
    history: routerHistory,
    routes:[
        {
            path: "/",
            name: "index",
            component: index
        },
        {
            path: "/hello",
            name: "helloWorld",
            component: helloWorld
        },
        {
            path: "/controlMenu",
            name: "Menu",
            component: menu,
            children:[
                {
                    path:'/controlMenu/tempSche',
                    name:'tempSche',
                    component: tempsche
                },
                {
                    path:'/controlMenu/upDown',
                    name:'upDown',
                    component: upDown
                },
                {
                    path:'/controlMenu/qiangCom',
                    name:'qiangCom',
                    component: qiangCom
                },
                {
                    path:'/controlMenu/qiangDu',
                    name:'qiangDu',
                    component: qiangDu
                },
            ]
        }
        ]
    }
)


export default router