import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДеталиMixin
} from '../mixins/regenerated/models/i-i-s-snezhko-88888-детали';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДеталиMixin, Validations, {
});

defineProjections(Model);

export default Model;
