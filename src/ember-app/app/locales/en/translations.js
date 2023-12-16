import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSnezhko_88888БоксLForm from './forms/i-i-s-snezhko-88888-бокс-l';
import IISSnezhko_88888ДеталиLForm from './forms/i-i-s-snezhko-88888-детали-l';
import IISSnezhko_88888ДолжностьLForm from './forms/i-i-s-snezhko-88888-должность-l';
import IISSnezhko_88888ЗаказLForm from './forms/i-i-s-snezhko-88888-заказ-l';
import IISSnezhko_88888КлиентLForm from './forms/i-i-s-snezhko-88888-клиент-l';
import IISSnezhko_88888СотрудникиLForm from './forms/i-i-s-snezhko-88888-сотрудники-l';
import IISSnezhko_88888УслугаLForm from './forms/i-i-s-snezhko-88888-услуга-l';
import IISSnezhko_88888БоксEForm from './forms/i-i-s-snezhko-88888-бокс-e';
import IISSnezhko_88888ДеталиEForm from './forms/i-i-s-snezhko-88888-детали-e';
import IISSnezhko_88888ДолжностьEForm from './forms/i-i-s-snezhko-88888-должность-e';
import IISSnezhko_88888ЗаказEForm from './forms/i-i-s-snezhko-88888-заказ-e';
import IISSnezhko_88888КлиентEForm from './forms/i-i-s-snezhko-88888-клиент-e';
import IISSnezhko_88888СотрудникиEForm from './forms/i-i-s-snezhko-88888-сотрудники-e';
import IISSnezhko_88888УслугаEForm from './forms/i-i-s-snezhko-88888-услуга-e';
import IISSnezhko_88888АвтомобильModel from './models/i-i-s-snezhko-88888-автомобиль';
import IISSnezhko_88888БоксModel from './models/i-i-s-snezhko-88888-бокс';
import IISSnezhko_88888ДеталиModel from './models/i-i-s-snezhko-88888-детали';
import IISSnezhko_88888ДолжностьModel from './models/i-i-s-snezhko-88888-должность';
import IISSnezhko_88888ЗаказModel from './models/i-i-s-snezhko-88888-заказ';
import IISSnezhko_88888КлиентModel from './models/i-i-s-snezhko-88888-клиент';
import IISSnezhko_88888СоставЗаказаModel from './models/i-i-s-snezhko-88888-состав-заказа';
import IISSnezhko_88888СоставУслугиModel from './models/i-i-s-snezhko-88888-состав-услуги';
import IISSnezhko_88888СотрудникиModel from './models/i-i-s-snezhko-88888-сотрудники';
import IISSnezhko_88888УслугаModel from './models/i-i-s-snezhko-88888-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-snezhko-88888-автомобиль': IISSnezhko_88888АвтомобильModel,
    'i-i-s-snezhko-88888-бокс': IISSnezhko_88888БоксModel,
    'i-i-s-snezhko-88888-детали': IISSnezhko_88888ДеталиModel,
    'i-i-s-snezhko-88888-должность': IISSnezhko_88888ДолжностьModel,
    'i-i-s-snezhko-88888-заказ': IISSnezhko_88888ЗаказModel,
    'i-i-s-snezhko-88888-клиент': IISSnezhko_88888КлиентModel,
    'i-i-s-snezhko-88888-состав-заказа': IISSnezhko_88888СоставЗаказаModel,
    'i-i-s-snezhko-88888-состав-услуги': IISSnezhko_88888СоставУслугиModel,
    'i-i-s-snezhko-88888-сотрудники': IISSnezhko_88888СотрудникиModel,
    'i-i-s-snezhko-88888-услуга': IISSnezhko_88888УслугаModel
  },

  'application-name': 'Snezhko_88888',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Snezhko_88888',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Snezhko_88888',
          title: 'Snezhko_88888'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'snezhko-88888': {
          caption: 'Snezhko_88888',
          title: 'Snezhko_88888',
          'i-i-s-snezhko-88888-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-snezhko-88888-услуга-l': {
            caption: 'Услуга',
            title: ''
          },
          'i-i-s-snezhko-88888-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-snezhko-88888-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-snezhko-88888-бокс-l': {
            caption: 'Бокс',
            title: ''
          },
          'i-i-s-snezhko-88888-детали-l': {
            caption: 'Детали',
            title: ''
          },
          'i-i-s-snezhko-88888-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-snezhko-88888-бокс-l': IISSnezhko_88888БоксLForm,
    'i-i-s-snezhko-88888-детали-l': IISSnezhko_88888ДеталиLForm,
    'i-i-s-snezhko-88888-должность-l': IISSnezhko_88888ДолжностьLForm,
    'i-i-s-snezhko-88888-заказ-l': IISSnezhko_88888ЗаказLForm,
    'i-i-s-snezhko-88888-клиент-l': IISSnezhko_88888КлиентLForm,
    'i-i-s-snezhko-88888-сотрудники-l': IISSnezhko_88888СотрудникиLForm,
    'i-i-s-snezhko-88888-услуга-l': IISSnezhko_88888УслугаLForm,
    'i-i-s-snezhko-88888-бокс-e': IISSnezhko_88888БоксEForm,
    'i-i-s-snezhko-88888-детали-e': IISSnezhko_88888ДеталиEForm,
    'i-i-s-snezhko-88888-должность-e': IISSnezhko_88888ДолжностьEForm,
    'i-i-s-snezhko-88888-заказ-e': IISSnezhko_88888ЗаказEForm,
    'i-i-s-snezhko-88888-клиент-e': IISSnezhko_88888КлиентEForm,
    'i-i-s-snezhko-88888-сотрудники-e': IISSnezhko_88888СотрудникиEForm,
    'i-i-s-snezhko-88888-услуга-e': IISSnezhko_88888УслугаEForm
  },

});

export default translations;
