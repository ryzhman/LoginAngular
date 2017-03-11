/**
 * Created by Олександр on 25.02.2017.
 */
import headerController from "../controller/HeaderController";
import homeController from "../controller/HomeConroller";
import aboutController from "../controller/AboutController";
import loginController from "../controller/LoginController";
import logoutController from "../controller/LogoutController";
import usersService from "../service/userService";

import headerTmpl from "../../../views/common/header.html";
import logoutTmpl from '../../../views/common/logout.html';
import loginTmpl from '../../../views/common/login.html';
import homeTmpl from '../../../views/user/home.html';
import aboutTmpl from '../../../views/common/about.html';


export default ($stateProvider, $locationProvider, $urlRouterProvider) => {
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
}
