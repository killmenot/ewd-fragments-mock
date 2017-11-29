'use strict';

var debug = require('debug')('ewd-fragments-mock');

module.exports = {

  init: function (application) {
    debug('init: %s', application);
  },

  beforeHandler: function (message) {
    debug('beforeHandler message: %s', JSON.stringify(message));
  },

  afterHandler: function (message) {
    debug('afterHandler message: %s', JSON.stringify(message));
  },

  handlers: {
    mock: function (message, session, send, finished) {
      debug('%s message: %s', message.type, JSON.stringify(message));

      finished({
        type: message.type,
        text: 'Hi, there!'
      });
    }
  }
};
