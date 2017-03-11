/**
 * Created by Олександр on 26.02.2017.
 */
'use strict';

export default class UsersListController {
    constructor($state, users, isAdmin) {
        "ngInject";

        this.userList = users;
        this.$state = $state;
        this._doesUserHaveRights(isAdmin);
    }

    _doesUserHaveRights(isAdmin) {
        if (!isAdmin) {
            this.$state.go('home');
        }
    }
}
