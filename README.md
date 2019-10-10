> As of version `1.0.0` this library exposes [ES modules](http://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules). Use an ES module aware bundler such as [Webpack](https://webpack.js.org) or [Rollup](https://rollupjs.org) to bundle it for the browser.


# bpmn-js-cli-modeling-dsl

[![Build Status](https://travis-ci.com/nikku/bpmn-js-cli-modeling-dsl.svg?branch=master)](https://travis-ci.com/nikku/bpmn-js-cli-modeling-dsl)

A modeling DSL (domain specific language) for [bpmn-js](https://github.com/bpmn-io/bpmn-js), built on top of [bpmn-js-cli](https://github.com/bpmn-io/bpmn-js-cli).


## Usage

Use the extension for [bpmn-js-cli](https://github.com/bpmn-io/bpmn-js-cli) to quickly model simple processes.

To model this process:

![example BPMN diagram](./resources/model.png)

simply execute the following command

```javascript
cli.model('StartEvent_1 -> and -> service -> user -> icatch -> xor -> or -> ithrow -> end');
```

You may use the full classified name of any BPMN element such as `bpmn:ServiceTask`, too to model it.


### Shortcuts

A number of aliases are registered for most commonly modeled BPMN elements:

```javascript
var aliases = {
  service:     'bpmn:ServiceTask',
  user:        'bpmn:UserTask',
  manual:      'bpmn:ManualTask',
  task:        'bpmn:Task',
  end:         'bpmn:EndEvent',
  transaction: 'bpmn:Transaction',
  sub:         'bpmn:SubProcess',
  call:        'bpmn:CallActivity',
  icatch:      'bpmn:IntermediateCatchEvent',
  ithrow:      'bpmn:IntermediateThrowEvent',
  xor:         'bpmn:ExclusiveGateway',
  or:          'bpmn:InclusiveGateway',
  and:         'bpmn:ParallelGateway'
};
```

Use any of the aliases instead of the full qualified BPMN name.



## Setup

Deploy the cli-extension with [bpmn-js](https://github.com/bpmn-io/bpmn-js):

```javascript
import BpmnModeler from 'bpmn-js/lib/Modeler';
import ModelingDslModule from 'bpmn-js-cli-modeling-dsl';

var modeler = new BpmnModeler({
  additionalModules: [
    ModelingDslModule
  ],
  cli: {
    bindTo: 'cli'
  }
});

modeler.importXML('some-bpmn-xml');
```


Access the cli as `cli` in your developer console (open via `F12` in most browsers).

Create a simple process from `<start>` via

```javascript
cli.model('<start> -> and -> service -> user -> icatch -> xor -> or -> ithrow -> end');
```


## License

MIT
