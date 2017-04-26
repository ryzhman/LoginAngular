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
        this.transactionInEdit = false;
        this.currentTransaction = {};

    }

    getAllTransactions() {
        return this.transactionService.getAllTransactions();
        //TODO change to call BE 
    }

    edit(transaction) {
        this.transactionInEdit = true;
        this.currentTransaction = transaction;
        

        this.transactionService.updateTransaction(transaction);
    }

    getTotalExpenses(){
        let allTransacion = this.getAllTransactions();
        let totalExpenses = 0;
        allTransacion.forEach(transaction => {
            totalExpenses += +transaction.sum;
        });
        return totalExpenses; 
    }

    backToTransactionsList() {
        this.date = null;
        this.category = null;
        this.description = null;
        this.sum = null;
        this.$state.go("user.allTransactions");
    }

}
