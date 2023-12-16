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
          caption: i18n.t('forms.application.sitemap.snezhko-88888.caption'),
          title: i18n.t('forms.application.sitemap.snezhko-88888.title'),
          children: [{
            link: 'i-i-s-snezhko-88888-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.snezhko-88888.i-i-s-snezhko-88888-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko-88888.i-i-s-snezhko-88888-сотрудники-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-snezhko-88888-услуга-l',
            caption: i18n.t('forms.application.sitemap.snezhko-88888.i-i-s-snezhko-88888-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko-88888.i-i-s-snezhko-88888-услуга-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-snezhko-88888-заказ-l',
            caption: i18n.t('forms.application.sitemap.snezhko-88888.i-i-s-snezhko-88888-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko-88888.i-i-s-snezhko-88888-заказ-l.title'),
            children: null
          }, {
            link: 'i-i-s-snezhko-88888-должность-l',
            caption: i18n.t('forms.application.sitemap.snezhko-88888.i-i-s-snezhko-88888-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko-88888.i-i-s-snezhko-88888-должность-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-snezhko-88888-бокс-l',
            caption: i18n.t('forms.application.sitemap.snezhko-88888.i-i-s-snezhko-88888-бокс-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko-88888.i-i-s-snezhko-88888-бокс-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-snezhko-88888-детали-l',
            caption: i18n.t('forms.application.sitemap.snezhko-88888.i-i-s-snezhko-88888-детали-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko-88888.i-i-s-snezhko-88888-детали-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-snezhko-88888-клиент-l',
            caption: i18n.t('forms.application.sitemap.snezhko-88888.i-i-s-snezhko-88888-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko-88888.i-i-s-snezhko-88888-клиент-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})