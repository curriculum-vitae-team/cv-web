import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import { languageService } from 'graphql/languages/languages.service'

// eslint-disable-next-line import/no-named-as-default-member
i18next
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: languageService.getLanguage() || 'en',
    interpolation: {
      escapeValue: false
    },
    supportedLngs: ['en', 'de', 'ru'],
    backend: {
      loadPath: '/translations/{{lng}}.json'
    }
  })

export default i18next
