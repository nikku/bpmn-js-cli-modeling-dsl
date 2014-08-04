'use strict';

var TestHelper = require('bpmn-js/test/TestHelper'),
    Matchers = require('bpmn-js/test/Matchers');

/* global bootstrapBpmnJS, inject */


var _ = require('lodash');

var fs = require('fs');

var modelingModule = require('bpmn-js/lib/features/modeling'),
    drawModule = require('bpmn-js/lib/draw'),
    cliModelModule = require('../../');


describe('cli', function() {

  beforeEach(Matchers.addDeepEquals);


  var diagramXML = fs.readFileSync('resources/start.bpmn', 'utf-8');

  var testModules = [ drawModule, cliModelModule, modelingModule ];

  beforeEach(bootstrapBpmnJS(diagramXML, {
    modules: testModules
  }));


  it('should register model() command', inject(function(cli) {
    expect(cli.model).toBeDefined();
  }));


  it('should model', inject(function(cli) {
    cli.model('StartEvent_1', '-> and -> service -> user -> icatch -> xor -> or -> ithrow -> end');
  }));

});