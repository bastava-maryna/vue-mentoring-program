import "./assets/tailwind.css"

import { createApp } from "vue"
import { createPinia, type Pinia } from "pinia"
import App from "./App.vue"
import router from "./router"
//import {VueFire, VueFireAuth} from "vuefire"
//import {firebaseApp} from "./firebase/init"
import lazyLoad from "./directives/lazyLoad"

const pinia: Pinia = createPinia()
const app = createApp(App)

app
  //.use(router)
  .use(lazyLoad)
  .use(pinia)
  .use(router)
// .use(VueFire, {
//     firebaseApp,
//     modules: [VueFireAuth()]
// })

app.mount("#app")
