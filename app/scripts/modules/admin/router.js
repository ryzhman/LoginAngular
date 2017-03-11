/**
 * Created by Олександр on 26.02.2017.
 */

'use strict';

import HeaderController from "../../common/controller/HeaderController";
import usersListController from "./controller/usersListController";
import addNewUserController from "./controller/addNewUserController";
import adminMainTmpl from "./views/admin.html";
import usersTmpl from "./views/users.html";
import addNewUserTmpl from "./views/addNewUser.html";
import headerTmpl from "../../../views/common/header.html";

export default ($stateProvider) => {
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
            adminRoleRequired: true,
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
            adminRoleRequired: true,
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
            adminRoleRequired: true,
            loginRequired: true,
            template: addNewUserTmpl,
            controller: addNewUserController,
            controllerAs: 'ctrl',
        });
}
