declare interface Window {
  webkitDevicePixelRatio: any
  mozDevicePixelRatio: any
}

declare module '*.vue' {
  import { type DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}

declare const __SYSTEM_INFO__: {
  pkg: {
    dependencies: Recordable<string>
    devDependencies: Recordable<string>
  }
  lastBuildTime: string
}

declare module '@bytemd/plugin-gfm/lib/locales/zh_Hans.json'
