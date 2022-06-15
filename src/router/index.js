import {createRouter,createWebHistory} from 'vue-router'


const index = () => import("../components/index")
const helloWorld = () => import("../components/HelloWorld")

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
            }
        ]
    }
)


export default router