import forEach from 'lodash/collection/forEach';


export default function ModelCommand(cli, params, modeling) {

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

  return {
    args: [
      params.shape('source'),
      params.string('chain')
    ],
    exec: function(source, chain) {

      var results = [];
      var types = chain.split(/\s*->\s*/);

      forEach(types, function(t) {
        if (!t) {
          return;
        }

        t = aliases[t] || t;

        source = cli.append(source, t, '150,0');
        results.push(source);
      });

      return results;
    }
  };
}

ModelCommand.$inject = [
  'cli',
  'cli._params',
  'modeling'
];