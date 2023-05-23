import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from 'public/translations/en.json'
import ru from 'public/translations/ru.json'

const resources = {
  en: {
    translation: en
  },
  ru: {
    translation: ru
  }
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
