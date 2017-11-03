import template from './pxbutton.component.html';
import controller from './pxbutton.controller.js';
import './pxbutton.component.scss';

let pxbuttonComponent = {
  restrict: 'E',
  bindings: {
    disabled: '<',
    text: '<',
    type: '<',
    logo: '<',
    onClick: '&',
  },
  template,
  controller,
  controllerAs: 'vm'
};
export default pxbuttonComponent;