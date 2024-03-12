import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/english/translation.json';
import hiTranslation from './locales/Hindi/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      hi: {
        translation: hiTranslation
      }
    },
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
