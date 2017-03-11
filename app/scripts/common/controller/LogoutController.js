export default class LogoutController {
    constructor($state, userService) {
        "use strict";

        "ngInject";

        this.userService = userService;
        this.$state = $state;
    }

    logout() {
        "use strict";

        this.userService.loggedInUser = null;
        this.$state.go('home');
    }

}
