import { Serializer as БоксSerializer } from
  '../mixins/regenerated/serializers/i-i-s-snezhko-88888-бокс';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(БоксSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
