'use strict';

export default class AddNewUserController {
    constructor($state, userService) {
        this.$state = $state;
        this.userService = userService;
    };

    addNewUser() {
        this.userService.addNewUser({
            name: this.name,
            pass: this.pass1,
            group: this.group,
            email: this.email

        })

        this.name = '';
        this.pass = '';
        this.group = '';
        this.$state.go("admin.allUsers");
    };
}
