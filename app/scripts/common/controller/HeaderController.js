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

        let statesList = this.allStates.filter((state) => {
            if (state.title) {
                if (userService.getLoggedInUser() === null) {
                    if (!state.loginRequired && state.title !== "Login" && state.title !== "Sign up") {
                        return state.title;
                    }
                } else {
                    if (userService.isAdmin(userService.getLoggedInUser())) {
                        return state.title && state.title !== 'Login' && state.title !== "Sign up" && state.title !== "Logout";
                    } else {
                        if (!state.adminRoleRequired) {
                            return state.title && state.title !== 'Login' && state.title !== "Sign up" && state.title !== "Logout";
                        }
                    }
                }
            }
        });

        //sorting headers for particular order according to orderNumber prop
        this.generalStates = statesList.sort((a, b) => {
            return a.orderNumber - b.orderNumber;
        });

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
