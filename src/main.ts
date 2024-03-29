import { createApp } from 'vue'
import App from './App.vue'
//引入element-plus插件和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//获取应用实例对象
const app = createApp(App)
//安装element-plus插件
app.use(ElementPlus)
//将应用挂载到挂载点上
App.mount('#app')
