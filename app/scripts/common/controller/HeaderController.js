/**
 * Created by Олександр on 25.02.2017.
 */

export default class HeaderController {
    constructor($state, userService) {
        "ngInject";

        let statesList = $state.get(); //just getting states

        this.states = statesList.filter((state) => {
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
    }
}
