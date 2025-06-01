declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue' {
  import { DefineComponent, defineComponent, ref, onMounted } from 'vue'
  export { DefineComponent, defineComponent, ref, onMounted }
  export * from 'vue'
} 