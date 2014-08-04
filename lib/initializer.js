'use strict';

function Initializer(cli) {

  // commands
  cli._registerCommand('model', require('./commands/model'));
}

Initializer.$inject = [ 'cli' ];

module.exports = Initializer;