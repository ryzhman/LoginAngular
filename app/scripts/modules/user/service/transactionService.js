/**
 * Created by Олександр on 25.02.2017.
 */

export default class TransactionService {
    constructor($filter, $window, userService) {
        "use strict";
        "ngInject";

        this.$filter = $filter;
        this.userService = userService;
        this.storage = $window.storage;
    }

    addNewTransaction(date, category, description, sum) {
        let currentUser = this.userService.loggedInUser;
        let transaction = {
            date: date,
            category: category,
            description: description,
            sum: sum
        };
        console.log(transaction, currentUser);

        this._addTransaction(currentUser, transaction);

        return this.transactionsArr;
    }

    _addTransaction(user, transaction) {
        this.storage.setItem("transaction_" + currentUser, angular.toJson(transaction));
    }

    getAllTransactions() {
        //TODO change to call BE 
        let currentUser = this.userService.loggedInUser;
        let transactionsArr = [];
        let transactionKey = "transaction_" + currentUser;
        console.log(transactionKey);
        console.log(this.storage.length);
        for (let i = 0; i < this.storage.length; i++) {
            console.log(this.storage.key(i));
            if (transactionKey.indexOf(this.storage.key(i)) !== 0) {
                transactionsArr = this.storage.getItem(transactionKey);
                break;
            }
        }
        return this.transactionsArr;
    }
}
