import {
  ModelCommand
} from './commands';


export default function Initializer(cli) {

  // commands
  cli._registerCommand('model', ModelCommand);
}

Initializer.$inject = [ 'cli' ];