export default class SignUpController {
    constructor($state, userService) {
        "ngInject";
        'use strict';

        this.userService = userService;
        this.$state = $state;
;
    }

    arePasswordsEquals() {
        return this.password === this.repeatPassword;
    }

    createAccount() {
        let newUser = {
            "email": this.email,
            "name": this.name,
            "password": this.password
        };
        this.userService.addUser(newUser);
        this.$state.go("user.allTransactions");
    }


}
