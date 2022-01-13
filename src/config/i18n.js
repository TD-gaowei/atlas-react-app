import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import ICU from 'i18next-icu';
import { initReactI18next } from 'react-i18next';
import getEnv from './env';
import { i18nextPlugin } from 'translation-check';

export default async function configI18n(lng) {
  await i18n
    .use(ICU)
    .use(Backend)
    .use(initReactI18next)
    .use(i18nextPlugin)
    .init({
      lng,
      fallbackLng: 'en',
      backend: {
        crossDomain: true,
        loadPath: `${getEnv('LOCALE_PUBLIC_URL')}/locales/{{lng}}/app.json`,
      },
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      react: {
        useSuspense: false,
      },
      saveMissing: true,
      saveMissingTo: 'all',
      missingKeyHandler: (ng, ns, key, fallbackValue) => {
        console.error(ng, ns, key, fallbackValue);
      },
    });

  return {
    changeLanguage: ({ language }) => i18n.changeLanguage(language),
  };
}
