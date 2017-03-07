/**
 * Created by Олександр on 25.02.2017.
 */

export default class HeaderController {
    constructor($state, userService) {
        let statesList = $state.get(); //just getting states
        // this.states = states.filter((state) =>{ //getting their names
        //     if(userService.getLoggedInUser() && state.loginRequired)
        //     // if(userService.getLoggedInUser() && state.title)
        //     return state.title;
        // });
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
