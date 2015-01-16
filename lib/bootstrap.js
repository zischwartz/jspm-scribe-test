import $ from 'jquery';
import Scribe from 'scribe';
import scribePluginToolbar from 'scribe-plugin-toolbar';
import scribePluginHeadingCommand from 'scribe-plugin-heading-command';
// import underscore from 'myname';

export function bootstrap() {
  // bootstrap code here
   var scribeElement = document.querySelector('.scribe');
  // Create an instance of Scribe
  var scribe = new Scribe(scribeElement);

  // Use some plugins
  // scribe.use(scribePluginBlockquoteCommand());
  var toolbarElement = document.querySelector('.toolbar');
  scribe.use(scribePluginToolbar(toolbarElement));
  scribe.use(scribePluginHeadingCommand(2));
  scribe.use(scribePluginHeadingCommand(3));
}
