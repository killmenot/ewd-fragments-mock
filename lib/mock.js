'use strict';

module.exports = {

  handlers: {
    mock: function (messageObj, session, send, finished) {
      finished({
        text: 'Hello modular world!'
      });
    }
  }
};
