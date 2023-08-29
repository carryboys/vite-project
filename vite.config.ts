import { defineConfig, } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import {presetIcons,presetAttributify,presetUno} from 'unocss';
import { viteMockServe } from "vite-plugin-mock";
// https://vitejs.dev/config/
export default defineConfig({
server: {
  hmr:true,
  proxy: {
    '/api': {
      target: 'localhost:5173', //目标url
      changeOrigin: true, //支持跨域
      rewrite: (path) => path.replace(/^\/api/, ""),
      //重写路径,替换/api
    }
  }
},
plugins: [
  vue(),
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),
  viteMockServe(),
  // 全局通用
  unocss({
    rules:[
      ['flex', { display: "flex" }],
      ['red',{color:'red'}],
      [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) * 10}px` })],
      [/^p-(\d+)$/, ([, d]) => ({ padding: `${Number(d) * 10}px` })]
    ],
    shortcuts:{
      chat:['red','p-4']
    },
    presets:[presetIcons(),presetUno(),presetAttributify()],
    theme:{
      colors:{ primary: "var(--primary-color)", dark_bg: "var(--white-bg)" },
    }
  }),
],
})
