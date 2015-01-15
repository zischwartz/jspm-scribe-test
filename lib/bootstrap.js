import $ from 'jquery';
import Scribe from 'scribe';
// import underscore from 'myname';

export function bootstrap() {
  // bootstrap code here
   var scribeElement = document.querySelector('.scribe');
  // Create an instance of Scribe
  var scribe = new Scribe(scribeElement);

  // Use some plugins
  // scribe.use(scribePluginBlockquoteCommand());
  // var toolbarElement = document.querySelector('.toolbar');
  // scribe.use(scribePluginToolbar(toolbarElement));
}