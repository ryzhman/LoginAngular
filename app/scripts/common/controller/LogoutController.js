'use strict';

export default class LogoutController {
    constructor($state, userService) {
        "ngInject";

        this.userService = userService;
        this.$state = $state;
    }

    logout() {
        this.userService.loggedInUser = null;
        this.$state.go('home');
    }

}
