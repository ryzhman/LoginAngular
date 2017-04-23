/**
 * Created by Олександр on 26.02.2017.
 */

export default class TransactionListController {
    constructor($state, $scope, $localStorage, $sessionStorage) {
        "use strict";
        "ngInject";

        $scope.$storage = $localStorage;
        this.storage = $scope.$storage;
        this.initStorage();
        this.transactionList = this.storage.trnsact;

    }

    initStorage() {
        this.storage.trnsact = [{
            date: 123,
            category: 'aaa',
            description: 'description',
            sum: 1999
        }];
    }

    _storeTransaction(transactionsArr) {
        console.log("_storeTransaction");

        this.storage.trnsact = transactionsArr;
    }

    addNewTransaction(date, category, description, sum) {
        let transaction = {
            'date': date,
            'category': category,
            'description': description,
            'sum': sum
        };
        let allTransactions = this.storage.trnsact;
        allTransactions.push(transaction);

        this._storeTransaction(allTransactions);
    }

    getAllTransactions() {
        // console.log($storage);
        // console.log(JSON.parse(this.$localStorage.getItem("trnsact")));
        //TODO change to call BE 
        // return JSON.parse($localStorage.getItem("trnsact"));
        return this.storage.trnsact;
    }




}
