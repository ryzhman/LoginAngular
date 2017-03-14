/**
 * Created by Олександр on 25.02.2017.
 */
import headerController from "../controller/HeaderController";
import homeController from "../controller/HomeConroller";
import aboutController from "../controller/AboutController";
import loginController from "../controller/LoginController";
import logoutController from "../controller/LogoutController";

import headerTmpl from "../../../views/common/header.html";
import logoutTmpl from '../../../views/common/logout.html';
import loginTmpl from '../../../views/common/login.html';
import homeTmpl from '../../../views/user/home.html';
import aboutTmpl from '../../../views/common/about.html';


export default ($stateProvider, $locationProvider, $urlRouterProvider) => {
    "use strict";

    "ngInject";

    let header = {
        template: headerTmpl,
        controller: headerController,
        controllerAs: 'ctrl'
    };

    $locationProvider.hashPrefix("!");

    $stateProvider
        .state("home", {
            url: "/home",
            title: 'Home',
            orderNumber: 1,
            adminRoleRequired: false,
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
            adminRoleRequired: false,
            loginRequired: false,
            views: {
                'header': header,
                '': {
                    template: loginTmpl,
                    controller: loginController,
                    controllerAs: 'ctrl'
                }
            },
        })
        .state('logout', {
            url: '/logout',
            title: "Logout",
            orderNumber: 3,
            adminRoleRequired: false,
            loginRequired: true,
            views: {
                'header': header,
                '': {
                    template: logoutTmpl,
                    controller: logoutController,
                    controllerAs: 'ctrl'
                }
            },
        })
        .state("about", {
            url: '/about',
            title: 'About',
            orderNumber: 4,
            adminRoleRequired: false,
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

    $urlRouterProvider.otherwise('/home');
};
