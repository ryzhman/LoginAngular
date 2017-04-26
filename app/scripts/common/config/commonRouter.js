/**
 * Created by Олександр on 25.02.2017.
 */
import headerController from "../controller/HeaderController";
import homeController from "../controller/HomeConroller";
import aboutController from "../controller/AboutController";
import loginController from "../controller/LoginController";
import signUpController from "../controller/signUpController";

import headerTmpl from "../../../views/common/header.html";
import loginTmpl from '../../../views/common/login.html';
import homeTmpl from '../../../views/user/home.html';
import aboutTmpl from '../../../views/common/about.html';
import signUpTmpl from '../../../views/common/signUp.html';

export default ($stateProvider, $locationProvider, $urlRouterProvider) => {
    "use strict";

    "ngInject";

    let header = {
        template: headerTmpl,
        controller: headerController,
        controllerAs: 'ctrl'
    };

    $locationProvider.hashPrefix("!");
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state("home", {
            url: "/home",
            title: 'Home',
            orderNumber: 1,
            loginRequired: false,
            views: {
                'header': header,
                '': {
                    template: homeTmpl,
                    controller: homeController,
                    controllerAs: 'ctrl'
                }
            }
        })
        .state('login', {
            url: '/login',
            title: "Login",
            orderNumber: 2,
            loginRequired: false,
            views: {
                'header': header,
                '': {
                    template: loginTmpl,
                    controller: loginController,
                    controllerAs: 'ctrl'
                }
            }
        })
        .state('signUp', {
            url: "/register",
            title: "Sign up",
            loginRequired: false,
            views: {
                'header': header,
                '': {
                    template: signUpTmpl,
                    controller: signUpController,
                    controllerAs: 'ctrl'
                }
            }
        })
        .state("about", {
            url: '/about',
            title: 'About',
            orderNumber: 4,
            loginRequired: false,
            views: {
                'header': header,
                '': {
                    template: aboutTmpl,
                    controller: aboutController,
                    controllerAs: 'ctrl'
                }
            }
        });

};
