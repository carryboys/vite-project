import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index';
import { createPinia } from 'pinia';
import  ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import Loading from './components/loading'
export const app =createApp(App)
const store = createPinia()
import 'uno.css'
app.use(router).use(store).use(ElementPlus).use(Loading)
app.config.globalProperties.$projectName = 'vue3TsPiniaProject';
// 定义一个全局过滤器
app.config.globalProperties.$filter={
    sign<T>(str:T){
        return `项目的-${str}`
    },
    // filterByName<T>(data:Array<T>,name:string){
    //     const result =data.find(obj=>obj.name ==name)
    //     return result
    // }
}

declare module '@vue/runtime-core'{
    type Filter ={
        sign<T>(str:T):string
    }
    export interface ComponentCustomProperties{
        $filter: Filter ,
        $projectName:string
    }
}
app.mount('#app')
// 类型申明

declare module '@vue/runtime-core'{
    type Lod ={
        show:()=>void,
        hide:()=>void
    }
    export interface ComponentCustomProperties{
        $_loading:Lod
    }
}
if (process.env.NODE_ENV === 'development') {
    const { mockRequest } = import('../mock')
    mockRequest()
  }