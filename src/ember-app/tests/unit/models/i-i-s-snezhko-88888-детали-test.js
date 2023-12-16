import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-snezhko-88888-детали', 'Unit | Model | i-i-s-snezhko-88888-детали', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-snezhko-88888-автомобиль',
    'model:i-i-s-snezhko-88888-бокс',
    'model:i-i-s-snezhko-88888-детали',
    'model:i-i-s-snezhko-88888-должность',
    'model:i-i-s-snezhko-88888-заказ',
    'model:i-i-s-snezhko-88888-клиент',
    'model:i-i-s-snezhko-88888-состав-заказа',
    'model:i-i-s-snezhko-88888-состав-услуги',
    'model:i-i-s-snezhko-88888-сотрудники',
    'model:i-i-s-snezhko-88888-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
