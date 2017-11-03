import 'bootstrap-css-only';
import 'normalize.css';
import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';

import ngMaterial from '../../node_modules/angular-material/angular-material';
import ngAnimate from '../../node_modules/angular-animate/angular-animate';
import ngAria from '../../node_modules/angular-aria/angular-aria';

angular.module('app', [
  'ngMaterial',
  ComponentsModule.name
]).component('app', appComponent);
