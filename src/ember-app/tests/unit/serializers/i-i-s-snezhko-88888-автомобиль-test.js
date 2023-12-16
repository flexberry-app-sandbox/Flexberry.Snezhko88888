import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-snezhko-88888-автомобиль', 'Unit | Serializer | i-i-s-snezhko-88888-автомобиль', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-snezhko-88888-автомобиль',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-snezhko-88888-единицы',
    'transform:i-i-s-snezhko-88888-тип-автомобиля',
    'transform:i-i-s-snezhko-88888-тип-оплаты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
