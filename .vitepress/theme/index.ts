import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import DemoLoop from './DemoLoop.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-hero-after': () => h(DemoLoop)
    })
  }
}