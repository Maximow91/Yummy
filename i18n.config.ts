import i18n, { LanguageDetectorAsyncModule } from 'i18next';
import {getLocales} from 'react-native-localize';
import {initReactI18next} from 'react-i18next';
import en from './translations/en.json';
import ru from './translations/ru.json';
import es from './translations/es.json';
import fr from './translations/fr.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppLanguages } from './src/types/types';

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
  es: {
    translation: es,
  },
  fr: {
    translation: fr,
  },
};

const DEFAULT_LANGUAGE = 'en';

const languageDetectorPlugin: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  //@ts-expect-error
  detect: async (callback: (lang: string) => void) => {
    try {
      const language = await AsyncStorage.getItem('@language');
      if (language) {
        console.log('get language from async storage');
        return callback(language);
      }

      const deviceLang = getLocales()[0].languageCode;
      if (Object.values(AppLanguages).includes(deviceLang as AppLanguages)) {
        console.log('get language from device locale');
        return callback(deviceLang);
      }

      return callback(DEFAULT_LANGUAGE);
    } catch (error) {
      console.log('error reading language', error);
    }
  },
  cacheUserLanguage: async function (language: string) {
    try {
      await AsyncStorage.setItem('@language', language);
    } catch (error) {
      console.log('error storing language in async storage', error);
    }
  },
};



i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
