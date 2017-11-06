import template from './pxbutton.component.html';
import controller from './pxbutton.controller.js';
import './pxbutton.component.scss';

let pxbuttonComponent = {
  restrict: 'E',
  bindings: {
    text: '<',
    type: '<',
    icon: '<',
    onDisabled: '<',
    onClick: '&',
  },
  template,
  controller,
  controllerAs: 'vm'
};
export default pxbuttonComponent;