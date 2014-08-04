module.exports = {
  __depends__: [
    require('bpmn-js-cli')
  ],
  __init__: [ 'cliModelInitializer' ],
  cliModelInitializer: [ 'type', require('./initializer') ]
};