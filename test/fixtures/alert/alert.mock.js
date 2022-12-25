import Condition from '../../../grafana/alert/condition.js';
import Alert from '../../../grafana/alert/alert.js';

export default () => {
  const condition = new Condition()
    .onQuery('B', '5m', 'now')
    .withReducer('min')
    .withEvaluator(1.1, 'gt');

  return new Alert().addCondition(condition);
};


