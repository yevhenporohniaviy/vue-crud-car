import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import { loadFonts } from './plugins/webfontloader'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'



const app = createApp(App)
const pinia = createPinia()

loadFonts()

pinia.use(piniaPluginPersistedstate)

app.use(pinia).use(ElementPlus).use(vuetify).mount('#app')
