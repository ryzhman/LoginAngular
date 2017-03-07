/**
 * Created by Олександр on 26.02.2017.
 */

'use strict';

import HeaderController from "../../common/controller/HeaderController";
import usersListController from "./controller/usersListController";
import addNewUserController from "./controller/addNewUserController";

export default ($stateProvider) => {

    let header = {
        templateUrl: '/app/views/common/header.html',
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
                    templateUrl: '/app/views/admin/admin.html',
                }
            },
            resolve: {
                isAdmin: (userService) => {
                    return userService.isLoggedInUserAdmin();
                },
                users: (userService) => {
                    return userService.getUsers();
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
            templateUrl: '/app/views/admin/users.html',
            controller: usersListController,
            controllerAs: 'ctrl'
        })
        .state('admin.addUser', {
            url: '/addNewUser',
            title: 'Add new user',
            adminRoleRequired: true,
            loginRequired: true,
            templateUrl: '/app/views/admin/addNewUser.html',
            controller: addNewUserController,
            controllerAs: 'ctrl',
        });
}
