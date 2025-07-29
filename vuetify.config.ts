import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

export default defineVuetifyConfiguration({
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#D55D1F',
          secondary: '#B1873F',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          highlight: '#319795',
          background: '#171410',
          container: '#BBB3AF',
          main: '#1E1E1E',
          surface: '#F5F5F5',
          faceoff: '#BB86FC',
          badge: '#1976D2',
        }
      },
      dark: {
        colors: {
          primary: '#BB86FC',
          secondary: '#03DAC6',
          accent: '#03DAC5',
          error: '#CF6679',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          highlight: '#319795',
          background: '#BBB3AF',
          container: '#171410',
          surface: '#1E1E1E',
          faceoff: '#319795',
          badge: '#1976D2',
        }
      }
    }
  },
  defaults: {
    VBtn: {
      class: 'text-none text-capitalize',
    }
  }
})