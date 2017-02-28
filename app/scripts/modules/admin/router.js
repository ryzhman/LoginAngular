/**
 * Created by Олександр on 26.02.2017.
 */

'use strict';

import HeaderController from "../../common/controller/HeaderController";
import usersListController from "./controller/usersListController";

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
            views: {
                'header': header,
                '': {
                    templateUrl: '/app/views/admin/admin.html',
                }
            },
            resolve: {
                isAdmin: (userService)=>{
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
            templateUrl: '/app/views/admin/users.html',
            controller: usersListController,
            controllerAs: 'ctrl'
        });
}