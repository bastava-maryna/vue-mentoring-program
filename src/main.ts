import "./assets/tailwind.css"

import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"
import { VueFire, VueFireAuth } from "vuefire"
import { firebaseApp } from "./firebase/init.js"
import lazyLoad from "./directives/lazyLoad"

const pinia = createPinia()
const app = createApp(App)

app
  .use(router)
  .use(lazyLoad)
  .use(pinia)
  .use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()]
  })

app.mount("#app")
