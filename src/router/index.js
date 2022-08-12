import {createRouter,createWebHistory} from 'vue-router'


const index = () => import("../components/index")
const helloWorld = () => import("../components/HelloWorld")
const menu = () => import("../components/Menu")
const tempsche = () => import("../components/Command/tempSchedule")
const upDown = () => import("../components/Command/upDown")
const qiangCom = () => import("../components/Command/qiangCommand")
const qiangDu = () => import("../components/Command/qiangdu")
const qiangGu = () => import("../components/Command/qiangGu")
const dingpai = () => import("../components/Command/dingpai")
const dingxie = () => import("../components/Command/dingxie")
const logQuery = () => import("../components/Query/logQuery")
const infoQuery = () => import("../components/Query/infoQuery")
const alarmQuery = () => import("../components/Query/alarmQuery")
const yieldQuery = () => import("../components/Query/yieldQuery")
const deviceStatus = () => import("../components/Query/deviceStatus")
const oreRatio = () => import("../components/Command/oreRatio")


const sendMeasge = () => import("../components/Communication/sendMessage")
const comState   = () => import("../components/Communication/comState")
const sendBasic  = () => import("../components/Communication/sendBasic")
const autoReply  = () => import("../components/Communication/autoReply")

const userConfig = () => import("../components/Maintenance/userConfig")
const truckManage= () => import("../components/Maintenance/truckManage")



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
                {
                    path:'/controlMenu/qiangGu',
                    name:'qiangGu',
                    component: qiangGu
                },
                {
                    path:'/controlMenu/dingpai',
                    name:'dingpai',
                    component: dingpai
                },
                {
                    path:'/controlMenu/dingxie',
                    name:'dingxie',
                    component: dingxie
                },
                {
                    path:'/controlMenu/logQuery',
                    name:'logQuery',
                    component: logQuery
                },
                {
                    path:'/controlMenu/infoQuery',
                    name:'infoQuery',
                    component: infoQuery
                },
                {
                    path:'/controlMenu/alarmQuery',
                    name:'alarmQuery',
                    component: alarmQuery
                },
                {
                    path:'/controlMenu/yieldQuery',
                    name:'yieldQuery',
                    component: yieldQuery
                },
                {
                    path:'/controlMenu/deviceStatus',
                    name:'deviceStatus',
                    component: deviceStatus
                },
                {
                    path:'/controlMenu/oreRatio',
                    name:'oreRatio',
                    component: oreRatio
                },
                {
                    path:'/controlMenu/sendMessage',
                    name:'sendMessage',
                    component: sendMeasge
                },

                {
                    path:'/controlMenu/comState',
                    name:'comState',
                    component: comState
                },

                {
                    path:'/controlMenu/sendBasic',
                    name:'sendBasic',
                    component: sendBasic
                },

                {
                    path:'/controlMenu/autoReply',
                    name:'autoReply',
                    component: autoReply
                },

                {
                    path:'/controlMenu/userConfig',
                    name:'userConfig',
                    component: userConfig
                },

                {
                    path:'/controlMenu/truckManage',
                    name:'truckManage',
                    component: truckManage
                }
            ]
        }
        ]
    }
)


export default router