import i18next, { use } from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import { languageService } from 'graphql/languages/languages.service'

use(initReactI18next).init({
  lng: languageService.getLanguage() || 'en',
  interpolation: {
    escapeValue: false
  }
})

use(HttpApi).init({
  supportedLngs: ['en', 'de', 'ru'],
  backend: {
    loadPath: '/translations/{{lng}}.json'
  }
})

export default i18next
