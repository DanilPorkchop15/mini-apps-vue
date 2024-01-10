import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './routes'
import { createPinia } from 'pinia'
import "@/assets/tailwind.css"
import '@/assets/scss/main.scss'


loadFonts()
const pinia = createPinia()
const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(pinia)
app.mount('#app')
