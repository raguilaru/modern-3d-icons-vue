import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Modern3DIcons from 'modern-3d-icons-vue'

const app = createApp(App)
app.use(Modern3DIcons)
app.mount('#app')
