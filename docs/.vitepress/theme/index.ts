import DefaultTheme from 'vitepress/theme'
import './styles/tokens.css'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp?.(ctx)

    // then the rest of the vue components
  }
}