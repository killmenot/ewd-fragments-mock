'use strict';

module.exports = {

  handlers: {
    mock: function (messageObj, session, send, finished) {
      finished({
        type: messageObj.type,
        text: 'Hi, there!'
      });
    }
  }
};
