import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date'),
  кодЗаказа: DS.attr('number'),
  комментарий: DS.attr('string'),
  сумма: DS.attr('decimal'),
  типОплаты: DS.attr('i-i-s-snezhko-88888-тип-оплаты'),
  бокс: DS.belongsTo('i-i-s-snezhko-88888-бокс', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-snezhko-88888-клиент', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-snezhko-88888-сотрудники', { inverse: null, async: false }),
  составЗаказа: DS.hasMany('i-i-s-snezhko-88888-состав-заказа', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-snezhko-88888-заказ.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-snezhko-88888-заказ.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаказа: {
    descriptionKey: 'models.i-i-s-snezhko-88888-заказ.validations.кодЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-snezhko-88888-заказ.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-snezhko-88888-заказ.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  типОплаты: {
    descriptionKey: 'models.i-i-s-snezhko-88888-заказ.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  бокс: {
    descriptionKey: 'models.i-i-s-snezhko-88888-заказ.validations.бокс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-snezhko-88888-заказ.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-snezhko-88888-заказ.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составЗаказа: {
    descriptionKey: 'models.i-i-s-snezhko-88888-заказ.validations.составЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-snezhko-88888-заказ', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    типОплаты: attr('Тип оплаты', { index: 3 }),
    комментарий: attr('Комментарий', { index: 4 }),
    сумма: attr('Сумма', { index: 5 }),
    бокс: belongsTo('i-i-s-snezhko-88888-бокс', 'Бокс', {
      номерБокса: attr('Номер бокса', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'номерБокса' }),
    сотрудники: belongsTo('i-i-s-snezhko-88888-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'фамилия' }),
    клиент: belongsTo('i-i-s-snezhko-88888-клиент', 'Клиент', {
      фамилия: attr('Фамилия', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'фамилия' }),
    составЗаказа: hasMany('i-i-s-snezhko-88888-состав-заказа', 'Состав заказа', {
      услуга: belongsTo('i-i-s-snezhko-88888-услуга', 'Услуга', {
        наименование: attr('Наименование', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-snezhko-88888-заказ', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    типОплаты: attr('Тип оплаты', { index: 3 }),
    комментарий: attr('Комментарий', { index: 4 }),
    сумма: attr('Сумма', { index: 5 }),
    бокс: belongsTo('i-i-s-snezhko-88888-бокс', 'Номер бокса', {
      номерБокса: attr('Номер бокса', { index: 6 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-snezhko-88888-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 7 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-snezhko-88888-клиент', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
