export default class AddNewTransaction {
    constructor($state, transactionService) {
        "use strict";

        "ngInject";

        this.$state = $state;
        this.userService = userService;
    }

    addNewUser() {
        "use strict";

        this.userService.addNewUser({
            name: this.name,
            pass: this.pass1,
            group: this.group,
            email: this.email

        });

        this.name = '';
        this.pass = '';
        this.group = '';
        this.$state.go("admin.allUsers");
    }
}
