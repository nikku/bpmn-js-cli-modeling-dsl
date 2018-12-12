import CliModule from 'bpmn-js-cli';

import Initializer from './initializer';

export default {
  __depends__: [
    CliModule
  ],
  __init__: [ 'cliModelInitializer' ],
  cliModelInitializer: [ 'type', Initializer ]
};