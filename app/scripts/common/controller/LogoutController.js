export default class LogoutController {
    constructor($state, userService) {
        "use strict";

        "ngInject";

        this.userService = userService;
        this.$state = $state;
        this.allStates = $state.get();
    }

    logout() {
        "use strict";

        this.userService.loggedInUser = null;
        this.$state.go('home');
    }

}
