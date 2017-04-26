/**
 * Created by Олександр on 25.02.2017.
 */

"use strict";
export default class TransactionService {
    constructor($filter, $window, userService) {
        "ngInject";

        this.$filter = $filter;
        this.userService = userService;
        this.localStorage = $window.localStorage;
    }

    addNewTransaction(date, category, description, sum) {
        let currentUser = this.userService.getLoggedInUser();
        let transaction = {
            date: date,
            category: category,
            description: description,
            sum: sum
        };
        this._addTransaction(currentUser, transaction);

        return this.transactionsArr;
    }

    _addTransaction(user, transaction) {
        this.localStorage.setItem("transaction_" + user, angular.toJson(transaction));
    }

    getAllTransactions() {
        //TODO change to call BE 
        let currentUser = this.userService.loggedInUser;
        let transactionsArr = [];
        let transactionKey = "transaction_" + currentUser;
        if (this.localStorage.getItem(transactionKey)) {
            transactionsArr = angular.fromJson(this.localStorage.getItem(transactionKey));
        } else {
            transactionsArr = [];
        }
        return this.transactionsArr;
    }
}
