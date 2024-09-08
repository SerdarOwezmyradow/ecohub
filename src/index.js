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
          'map': 'Map',
          "library": "Library",
          "news": "News",
          "balkan": "Balkan",
          "ahal": "Ahal",
          "asgabat": "Ashgabat",
          "mary": "Mary",
          "dashoguz": "Dashoguz",
          "lebap": "Lebap",
          "gallery": "Gallery",
          "test": "Test yourself",
          "enneagram1": "Take the test to choose a direction to check your sufficient level",
          "enneagram2": "Based on your scores, the most accurate personality type for you will be determined",
          "enneagram3": "Start test",
          "enneagram4": "Choose the most accurate percentage that describes your personality",
          "enneagram5": "Continue",
          "enneagram6": "Personality determined by your scores",
          "enneagram7": "Send",
          "rights": "All rights reserved",
          "lider": "Leader",
          "adress": "Address",
          "contact": "Contact info",
          "join": "Join"

        }
      },
      ru: {
        translation: {
          "key": "Главная страница",
          'map': 'Карта',
          "library": "Библиотека",
          "news": "Новости",
          "balkan": "Балкан",
          "ahal": "Ахал",
          "asgabat": "Ашхабад",
          "mary": "Мары",
          "dashoguz": "Дашогуз",
          "lebap": "Лебап",
          "gallery": "Галерея",
          "test": "Попробуй себя",
          "enneagram1": "Сдайте тест для того чтобы выбрать направление чтобы проверить достаточный уровень",
          "enneagram2": "По вашим балам определиться самый близкий вид личности для вас",
          "enneagram3": "Начать тест",
          "enneagram4": "Выберите самый близкий процент который описывает вашу личность",
          "enneagram5": "Продолжать",
          "enneagram6": "Личность которая определилась по вашим балам",
          "enneagram7": "Отправлять",
          "rights": "Все права защищены",
          "lider": "Лидер",
          "adress": "Адрес",
          "contact": "Контактная информация",
          "join": "Присоединиться"

        }
      },
      tk: {
        translation: {
          "key": "Baş sahypa",
          'map': 'Karta',
          "library": "Kitaphana",
          "news": "Täzelikler",
          "balkan": "Balkan",
          "ahal": "Ahal",
          "asgabat": "Aşgabat",
          "mary": "Mary",
          "dashoguz": "Daşoguz",
          "lebap": "Lebap",
          "gallery": "Galereýa",
          "test": "Özüňi syna",
          "enneagram1": "Ugur Saýlamak Üçin Siziň Şahsyýetiňiziň Ýeterlilik Derejesini Barlamak Üçin Test Tabşyryň",
          "enneagram2": "Siziň beren ballaryňyz boýunça size iň ýakyn şahsyýet görnüşi anyklanar",
          "enneagram3": "Teste Başla",
          "enneagram4": "Aşakdakylardan siziň şahsyýetiňize tanadýan iň ýakyn göterimi saýlaň",
          "enneagram5": "Dowam et",
          "enneagram6": "Siziň beren ballaryňyz boýunça anyklanylan şahsyýet",
          "enneagram7": "Ugrat",
          "rights": "Ähli hukuklar goralan",
          "lider": "Lider",
          "adress": "Adres",
          "contact": "Habarlaşmak üçin",
          "join": "Goşul"
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
