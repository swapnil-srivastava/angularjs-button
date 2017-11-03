import angular from 'angular';
    import PxbuttonModule from './pxbutton/pxbutton.module';

const ComponentsModule = angular.module('app.components',[
       PxbuttonModule.name 
]);

export default ComponentsModule;