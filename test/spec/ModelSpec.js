import {
  bootstrapModeler,
  inject
} from '../TestHelper';

import modelingModule from 'bpmn-js/lib/features/modeling';
import coreModule from 'bpmn-js/lib/core';

import modelModule from '../../';


describe('cli - model', function() {

  var diagramXML = require('resources/start.bpmn');

  beforeEach(bootstrapModeler(diagramXML, {
    modules: [
      coreModule,
      modelModule,
      modelingModule
    ]
  }));


  it('should register model() command', inject(function(cli) {
    expect(cli.model).to.exist;
  }));


  it('should model', inject(function(cli) {
    cli.model('StartEvent_1', '-> and -> service -> user -> icatch -> xor -> or -> ithrow -> end');
  }));

});