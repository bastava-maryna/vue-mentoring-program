import "./assets/tailwind.css"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { VueFire, VueFireAuth } from "vuefire"
import { firebaseApp } from "./firebase/init.js"
import lazyLoad from "./directives/lazyLoad.js"

const app = createApp(App)

app
  .use(router)
  .use(lazyLoad)
  .use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()]
  })

app.mount("#app")
