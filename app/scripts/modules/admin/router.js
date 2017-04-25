/**
 * Created by Олександр on 26.02.2017.
 */

import HeaderController from "../../common/controller/HeaderController";
import usersListController from "./controller/usersListController";
import addNewUserController from "./controller/addNewUserController";
import adminMainTmpl from "./views/admin.html";
import usersTmpl from "./views/users.html";
import addNewUserTmpl from "./views/addNewUser.html";
import headerTmpl from "../../../views/common/header.html";

export default ($stateProvider) => {
    "use strict";

    "ngInject";

    let header = {
        template: headerTmpl,
        controller: HeaderController,
        controllerAs: 'ctrl'
    };

    $stateProvider
        .state('admin', {
            abstract: true,
            url: '/admin',
            loginRequired: true,
            views: {
                'header': header,
                '': {
                    template: adminMainTmpl,
                }
            },
            resolve: {
                isAdmin: (userService) => {
                    return userService.isLoggedInUserAdmin();
                },
                loggedInUser: (userService) => {
                    return userService.getLoggedInUser();
                }
            }
        })
        .state('admin.allUsers', {
            url: '/users',
            title: 'Users list',
            orderNumber: 2,
            loginRequired: true,
            template: usersTmpl,
            controller: usersListController,
            controllerAs: 'ctrl',
            resolve: {
                users: (userService) => {
                    return userService.getUsers();
                }
            }
        })
        .state('admin.addUser', {
            url: '/addNewUser',
            title: 'Add new user',
            orderNumber: 3,
            loginRequired: true,
            template: addNewUserTmpl,
            controller: addNewUserController,
            controllerAs: 'ctrl',
        });
};
