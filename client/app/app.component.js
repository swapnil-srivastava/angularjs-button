import template from './app.component.html';
import './app.component.scss';
import controller from './app.controller.js'

const AppComponent = {
  template,
  restrict: 'E',
  controller,
  controllerAs: 'vm'
};

export default AppComponent;