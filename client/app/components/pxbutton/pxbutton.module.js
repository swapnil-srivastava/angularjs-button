import angular from 'angular';
import pxbuttonComponent from './pxbutton.component';

const pxbuttonModule = angular.module('pxbutton', [])
  .component('pxbutton', pxbuttonComponent);
export default pxbuttonModule;