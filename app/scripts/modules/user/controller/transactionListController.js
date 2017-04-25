/**
 * Created by Олександр on 26.02.2017.
 */

export default class TransactionListController {
    constructor($state, $scope, $rootScope, $localStorage, $sessionStorage, transactionService) {
        "use strict";
        "ngInject";

        this.$state = $state;
        this.transactionService = transactionService;
    }

    _checkUser(){
        console.log(this.transactionService);
        // console.log(this.transactionService.getLoggedInUser());
        if(!this.transactionService.getLoggedInUser()){
            this.$state.go('home');
        }
    }

    addNewTransaction() {
        this._checkUser()
        this.transactionService.addNewTransaction(this.date, this.category, this.description, this.sum);
        this.backToTransactionsList();
    }

    getAllTransactions() {
        this._checkUser()
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
