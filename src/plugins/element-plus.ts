import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import type { App } from 'vue'

export function setupElementPlus(app: App) {
  app.use(ElementPlus, {
    size: 'default',
  })
} 