/**
 * Created by Олександр on 25.02.2017.
 */

export default class HeaderController {
    constructor($state, userService, $sce, $mdSidenav) {
        "use strict";

        "ngInject";

        this.$mdSidenav = $mdSidenav;
        this.allStates = $state.get();

        this.loggedInUser = userService.getLoggedInUser();

        this.loginRegisterStates = this.allStates.filter((state) => {
            if (userService.getLoggedInUser() === null) {
                return state.title === "Login" || state.title === "Sign up";
            } else {
                return state.title === "Logout";
            }
        });

        this.explicitlyTrustedHtml = $sce.trustAsHtml();
    }

    getState(stateName) {
        let states = this.allStates.filter((state) => {
            return state.title === stateName;
        });
        return states[0];
    }


}
