const assert = require('assert')
const vows = require('vows')
const app = require('../')

vows.describe('simple-test').addBatch({
  'when performing a simple test': {
    topic: function () {
      return app.simpleTest(4)
    },
    'result should be valid': function (topic) {
      assert.isNumber(topic)
      assert.strictEqual(topic, 8)
    }
  }
}).export(module)
