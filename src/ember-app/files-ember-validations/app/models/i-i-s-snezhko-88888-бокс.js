import {
  defineNamespace,
  defineProjections,
  Model as БоксMixin
} from '../mixins/regenerated/models/i-i-s-snezhko-88888-бокс';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БоксMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
