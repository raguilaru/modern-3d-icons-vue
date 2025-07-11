declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue' {
  import { DefineComponent, defineComponent } from 'vue'
  export { DefineComponent, defineComponent }
  export * from 'vue'
} 