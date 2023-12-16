import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  услуга: DS.belongsTo('i-i-s-snezhko-88888-услуга', { inverse: null, async: false }),
  заказ: DS.belongsTo('i-i-s-snezhko-88888-заказ', { inverse: 'составЗаказа', async: false })
});

export let ValidationRules = {
  услуга: {
    descriptionKey: 'models.i-i-s-snezhko-88888-состав-заказа.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-snezhko-88888-состав-заказа.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставЗаказаE', 'i-i-s-snezhko-88888-состав-заказа', {
    услуга: belongsTo('i-i-s-snezhko-88888-услуга', 'Услуга', {
      наименование: attr('Наименование', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'наименование' })
  });
};
