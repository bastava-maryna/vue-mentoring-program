/// <reference types="vite/client" />
/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "*.svg" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent
  export default component
}
