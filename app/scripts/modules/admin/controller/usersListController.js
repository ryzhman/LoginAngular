/**
 * Created by Олександр on 26.02.2017.
 */

export default class UsersListController {
    constructor($state, users, isAdmin) {
        "use strict";
        "ngInject";

        this.userList = users;
        this.$state = $state;
        this._doesUserHaveRights(isAdmin);
    }

    _doesUserHaveRights(isAdmin) {
        "use strict";

        if (!isAdmin) {
            this.$state.go('home');
        }
    }
}
