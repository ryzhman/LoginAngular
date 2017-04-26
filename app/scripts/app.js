import angular from "angular";
import uiRouter from "angular-ui-router";
import ngStorage from "ngStorage";
import ngMaterial from "angular-material";
import ngAnimate from "angular-animate";
import ngAria from "angular-aria";
import xeditable from "angular-xeditable";
import angularMaterialDataTable from "angular-material-data-table";

import commonRouter from "./common/config/commonRouter";
import userModule from "./modules/user/app";

import userService from "./common/service/userService";
import pwdChecker from "./common/utils/pwdChecker";

angular.module('app', [
        uiRouter,
        angularMaterialDataTable,
        "xeditable",
        ngMaterial,
        ngAnimate,
        ngAria,
        userModule.name,
    ])
    .config(commonRouter)
    .service('userService', userService)
    .directive('pwdChecker', pwdChecker)
    .run(($rootScope) => {
        'use strict';
        "ngInject";
        $rootScope.$on('$stateChangeSuccess', (event, toState) => {
            $rootScope.pageTitle = toState.title;
        });

        /* $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
             console.log('$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams);
         });

         $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams) {
             console.log('$stateChangeError - fired when an error occurs during transition.');
             console.log(arguments);
         });

         $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
             console.log('$stateChangeSuccess to ' + toState.name + '- fired once the state transition is complete.');
         });

         $rootScope.$on('$viewContentLoaded', function(event) {
             console.log('$viewContentLoaded - fired after dom rendered', event);
         });

         $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
             console.log('$stateNotFound ' + unfoundState.to + '  - fired when a state cannot be found by its name.');
             console.log(unfoundState, fromState, fromParams);
         });*/
    });
