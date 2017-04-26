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
    }

    _checkUser() {
        if (!this.userService.getLoggedInUser()) {
            this.$state.go('home');
        }
    }

    addNewTransaction() {
        this._checkUser();
        this.transactionService.addNewTransaction(this.date, this.category, this.description, this.sum);
        this.backToTransactionsList();
    }

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
