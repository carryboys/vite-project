
import {createVNode, type App, VNode, render} from 'vue'
import loading from './index.vue'

export default{
     install(app:App){
        const vnode:VNode = createVNode(loading)
        render(vnode,document.body)
        app.config.globalProperties.$_loading ={
            show:vnode.component?.exposed?.show,
            hide:vnode.component?.exposed?.hide
        }
     }
}