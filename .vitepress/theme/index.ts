import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import DemoLoop from './DemoLoop.vue'
import HomeFeatures from './HomeFeatures.vue'
import PixelDriftHero from './PixelDriftHero.vue'
import CppPlayground from './CppPlayground.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(PixelDriftHero),
      'home-hero-after': () => h(DemoLoop),
      'home-features-before': () => h(HomeFeatures)
    })
  },
  enhanceApp({ app }) {
    app.component('CppPlayground', CppPlayground)
  }
}