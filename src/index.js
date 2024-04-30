import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/Fonts/WEB/css/general-sans.css';
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
          "key": "Main page",
          'map':'Map',
          "library": "Library",
          "news": "News",
          "balkan": "Balkan",
          "ahal": "Ahal",
          "asgabat": "Ashgabat",
          "mary": "Mary",
          "dashoguz": "Dashoguz",
          "lebap": "Lebap",
        }
      },
      ru: {
        translation: {
          "key": "Главная страница",
          'map':'Карта',
          "library": "Библиотека",
          "news": "Новости",
          "balkan": "Балкан",
          "ahal": "Ахал",
          "asgabat": "Ашхабад",
          "mary": "Мары",
          "dashoguz": "Дашогуз",
          "lebap": "Лебап",

        }
      },
      tk: {
        translation: {
          "key": "Baş sahypa",
          'map':'Karta',
          "library": "Kitaphana",
          "news": "Täzelikler",
          "balkan": "Balkan",
          "ahal": "Ahal",
          "asgabat": "Aşgabat",
          "mary": "Mary",
          "dashoguz": "Daşoguz",
          "lebap": "Lebap",
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
