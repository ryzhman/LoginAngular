/**
 * Created by Олександр on 26.02.2017.
 */

"use strict";
export default class NewTransactionController {
    constructor($state, $scope, userService, user, transactionService) {
        "ngInject";

        this.$state = $state;
        this.userService = userService;
        this.transactionService = transactionService;
    }

    addNewTransaction() {
        let id = this.sum + "" + new Date().getMinutes() + "" + new Date().getHours();
        this.transactionService.addNewTransaction(id, this.date, this.category, this.description, this.sum);
        this.backToTransactionsList();
        this.$state.go('user.allTransactions');
    }

    backToTransactionsList() {
        this.date = null;
        this.category = null;
        this.description = null;
        this.sum = null;
        this.$state.go("user.allTransactions");
    }

}
