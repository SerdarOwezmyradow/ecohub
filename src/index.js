import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['tk', 'ru', 'en'],
    fallbackLng: 'tk',
    resources: {
      en: {
        translation: {
          "key": "hello en",
          'map':'Map'
        }
      },
      ru: {
        translation: {
          "key": "hello ru",
          'map':'Карта'

        }
      },
      tk: {
        translation: {
          "key": "hello tk",
          'map':'Karta'

        }
      }
    },
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain', 'sessionStorage'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false },
    debug: true,
  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
