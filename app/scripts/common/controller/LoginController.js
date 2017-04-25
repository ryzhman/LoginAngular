/**
 * Created by Олександр on 25.02.2017.
 */
export default class LoginController {
    constructor(userService, $state) {
        "use strict";

        "ngInject";

        this.userService = userService;
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

        let user = this.userService.userLogin(this.login, this.pass);
        this.login = '';
        this.pass = '';

        if (!user) {
            this.$state.go('login'); //todo add error on logging in
        } else {
            this.$state.go('user.allTransactions');
        }
    }
}
