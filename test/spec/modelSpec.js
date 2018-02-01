'use strict';

require('../test-helper');

/* global bootstrapModeler, inject */

var fs = require('fs');

var modelingModule = require('bpmn-js/lib/features/modeling'),
    coreModule = require('bpmn-js/lib/core'),
    cliModelModule = require('../../');


describe('cli', function() {

  var diagramXML = fs.readFileSync('resources/start.bpmn', 'utf-8');

  beforeEach(bootstrapModeler(diagramXML, {
    modules: [
      coreModule,
      cliModelModule,
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