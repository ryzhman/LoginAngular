/**
 * Created by Олександр on 25.02.2017.
 */

export default class LoginController {
    constructor(userService, $state) {
        "ngInject";

        this.userService = userService;
        this.$state = $state;
        this.passwordsUnequal = true;
    };

    arePasswordsEqual() {
        this.passwordsUnequal = this.pass1 === this.pass2;
        return this.passwordsUnequal;
    }

    userLogin() {
        let user = this.userService.userLogin(this.login, this.pass);
        this.login = '';
        this.pass = '';

        if (!user) {
            alert("Error during logging in");
            this.$state.go('login');
        } else {
            if (this.userService.isAdmin(user)) {
                this.$state.go('admin.allUsers');
            } else {
                this.$state.go('about');
            }
        }
    }
}
