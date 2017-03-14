/**
 * Created by Олександр on 25.02.2017.
 */

export default class HeaderController {
    constructor($state, userService) {
        "use strict";

        "ngInject";

        let statesList = $state.get().filter((state) => {
            if (state.title) {
                if (userService.getLoggedInUser() === null) {
                    if (!state.loginRequired) {
                        return state.title;
                    }
                } else {
                    if (userService.isAdmin(userService.getLoggedInUser())) {
                        return state.title && state.title !== 'Login';
                    } else {
                        if (!state.adminRoleRequired) {
                            return state.title && state.title !== 'Login';
                        }
                    }
                }
            }
        }); 

        //sorting headers for particular order according to orderNumber prop
        this.states = statesList.sort((a, b) => {
            return a.orderNumber - b.orderNumber;
        });
    }
}
