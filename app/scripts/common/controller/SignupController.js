export default class SignUpController {
    constructor($state) {
        "ngInject";
        'use strict';



    }

    arePasswordsEquals() {
        return this.password === this.repeatPassword;
    }


}
