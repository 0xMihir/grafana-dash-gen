import test from 'tape';
import Alert from '../../grafana/alert/alert.js';
import Condition from '../../grafana/alert/condition.js';
import simpleAlert from '../fixtures/alert/simple_alert.js';
import alertWithCondition from '../fixtures/alert/alert_with_condition.js';

export default function () {
  test('simple alert', function t(assert) {
    const alert = new Alert();

    assert.deepEqual(alert.generate(), simpleAlert);
    assert.end();
  });

  test('alert should be able to add condition', assert => {
    const alert = new Alert();
    const condition = new Condition()
      .onQuery('B', '5m', 'now')
      .withReducer('min')
      .withEvaluator(1.1, 'gt');

    alert.addCondition(condition);

    assert.deepEqual(alert.generate(), alertWithCondition);
    assert.end();
  });

  test('alert should be able to override defaults from the constructor', assert => {
    const overrideOptions = {
      name: 'override name',
      for: '30min',
    };

    const alert = new Alert(overrideOptions);
    const actualAlert = alert.generate();

    assert.deepEqual(actualAlert.name, overrideOptions.name);
    assert.deepEqual(actualAlert.for, overrideOptions.for);
    assert.end();
  });

  test('alert should be able to receive conditions in the constructor', assert => {
    const condition = new Condition({
      type: 'query',
      query: {
        params: [
          'B',
          '5m',
          'now'
        ]
      },
      reducer: {
        type: 'min',
        params: []
      },
      evaluator: {
        type: 'gt',
        params: [1.1]
      },
      operator: {
        type: 'and'
      }
    });

    const overrideConditions = { conditions: [condition] };
    const alert = new Alert(overrideConditions);

    assert.deepEqual(alert.generate(), alertWithCondition);
    assert.end();
  });
}