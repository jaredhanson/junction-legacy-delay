var vows = require('vows');
var assert = require('assert');
var legacyDelay = require('index');


vows.describe('junction-legacy-delay').addBatch({
  
  'module': {
    'should export middleware': function () {
      assert.isFunction(legacyDelay);
      assert.isFunction(legacyDelay.legacyDelayParser);
    },
  },
  
}).export(module);
