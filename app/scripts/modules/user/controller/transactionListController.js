/**
 * Created by Олександр on 26.02.2017.
 */

"use strict";
export default class TransactionListController {
    constructor($state, $scope, userService, user, transactionService) {
        "ngInject";

        this.$state = $state;
        this.userService = userService;
        this.transactionService = transactionService;
        this.transactions = this.getAllTransactions();
    }

    // _checkUser() {
    //     if (!this.userService.getLoggedInUser()) {
    //         this.$state.go('home');
    //     }
    // }

    getAllTransactions() {
        // this._checkUser()
        return this.transactionService.getAllTransactions();
        //TODO change to call BE 
    }

    editTransaction(transactionId) {

    }

    backToTransactionsList() {
        this.date = null;
        this.category = null;
        this.description = null;
        this.sum = null;
        this.$state.go("user.allTransactions");
    }

}
