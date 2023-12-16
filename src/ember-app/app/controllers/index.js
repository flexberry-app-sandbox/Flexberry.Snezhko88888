import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-snezhko-88888-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-snezhko-88888-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-snezhko-88888-сотрудники-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-snezhko-88888-должность-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-snezhko-88888-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-snezhko-88888-должность-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.клиенты.caption'),
          title: i18n.t('forms.application.sitemap.клиенты.title'),
          children: [{
            link: 'i-i-s-snezhko-88888-клиент-l',
            caption: i18n.t('forms.application.sitemap.клиенты.i-i-s-snezhko-88888-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.клиенты.i-i-s-snezhko-88888-клиент-l.title'),
            icon: 'folder open',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.заказ.caption'),
          title: i18n.t('forms.application.sitemap.заказ.title'),
          children: [{
            link: 'i-i-s-snezhko-88888-заказ-l',
            caption: i18n.t('forms.application.sitemap.заказ.i-i-s-snezhko-88888-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.заказ.i-i-s-snezhko-88888-заказ-l.title'),
            icon: 'edit',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.боксы.caption'),
          title: i18n.t('forms.application.sitemap.боксы.title'),
          children: [{
            link: 'i-i-s-snezhko-88888-бокс-l',
            caption: i18n.t('forms.application.sitemap.боксы.i-i-s-snezhko-88888-бокс-l.caption'),
            title: i18n.t('forms.application.sitemap.боксы.i-i-s-snezhko-88888-бокс-l.title'),
            icon: 'list',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-услуг.caption'),
          title: i18n.t('forms.application.sitemap.справочник-услуг.title'),
          children: [{
            link: 'i-i-s-snezhko-88888-услуга-l',
            caption: i18n.t('forms.application.sitemap.справочник-услуг.i-i-s-snezhko-88888-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-услуг.i-i-s-snezhko-88888-услуга-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-детали.caption'),
          title: i18n.t('forms.application.sitemap.справочник-детали.title'),
          children: [{
            link: 'i-i-s-snezhko-88888-детали-l',
            caption: i18n.t('forms.application.sitemap.справочник-детали.i-i-s-snezhko-88888-детали-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-детали.i-i-s-snezhko-88888-детали-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})