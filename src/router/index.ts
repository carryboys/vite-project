import { createRouter, createWebHistory,RouteRecordRaw} from 'vue-router';
// 配置路由
const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        component:()=>import('../view/index.vue')
    },
    {
        path:'/css',
        component:()=>import('../view/css/css.vue')
    },
    {
        path:'/task',
        component:()=>import('../view/task.vue')
    },
    {
        path:'/chat',
        component:()=>import('../view/chat.vue')
    },
    {
        path:'/route',
        component:()=>import('../view/study/route.vue')
    },
    {
        path:'/eltable',
        component:()=>import('../view/study/elTable.vue')
    },
]
// 2.返回一个 router 实列，为函数，配置 history 模式
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
export default router