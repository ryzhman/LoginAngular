/**
 * Created by Олександр on 25.02.2017.
 */
export default class LoginController {
    constructor(userService, $state) {
        "use strict";

        "ngInject";

        this.userService = userService;
        this.allStates = $state.get();
        this.$state = $state;
        this.passwordsUnequal = true;
    }

    arePasswordsEqual() {
        "use strict";

        this.passwordsUnequal = this.pass1 === this.pass2;
        return this.passwordsUnequal;
    }

    userLogin() {
        "use strict";

        this.login = "user1";
        this.pass = "user1";
        let user = this.userService.userLogin(this.login, this.pass);
        this.login = '';
        this.pass = '';

        if (!user) {
            this.$state.go(this.userService.redirectToState(this.allStates, 'login')); //todo add error on logging in
        } else {
            if (this.userService.isAdmin(user)) {
                this.$state.go(this.userService.redirectToState(this.allStates, 'Users list'));
            } else {
                this.$state.go(this.userService.redirectToState(this.allStates, 'Transactions list'));
            }
        }
    }
}
