/**
 * Created by Олександр on 25.02.2017.
 */

"use strict";
export default class TransactionService {
    constructor($filter, $window, userService, categoryService) {
        "ngInject";

        this.$filter = $filter;
        this.userService = userService;
        this.localStorage = $window.localStorage;
        this.categoryService = categoryService;
    }

    _storeTransaction(user, transaction) {
        let currentArr = this.getAllTransactions();
        currentArr.push(transaction);
        this.localStorage.setItem("transaction_" + user, angular.toJson(currentArr));
    }

    _storeTransactions(user, transactions) {
        this.localStorage.removeItem("transaction_" + user);
        this.localStorage.setItem("transaction_" + user, angular.toJson(transactions));
    }

    _replaceTransaction(transaction, dataForUpdate) {
        let updatedArr = this.getAllTransactions();
        updatedArr.forEach(elem => {
            if (elem.id === transaction.id) {
                for (let i = 0; i < Object.keys(transaction).length; i++) {
                    let key = Object.keys(transaction)[i];
                    if (key !== 'id') {
                        elem[key] = dataForUpdate[key];
                    }
                }
            }
        });
        this._storeTransactions(this.userService.getLoggedInUser(), updatedArr);
    }

    _deleteTransaction(transaction) {
        let updatedArr = this.getAllTransactions();
        updatedArr.forEach(elem => {
            if (elem.id === transaction.id) {
                let indexOfElemToRemove = updatedArr.indexOf(elem);
                updatedArr.splice(indexOfElemToRemove, 1);
            }
        });
        this._storeTransactions(this.userService.getLoggedInUser(), updatedArr);
    }

    addNewTransaction(id, date, category, description, sum) {
        let currentUser = this.userService.getLoggedInUser();
        let transaction = {
            id: id,
            date: date,
            category: category,
            description: description,
            sum: sum
        };
        this._storeTransaction(currentUser, transaction);
        return this.transactionsArr;
    }

    getAllTransactions() {
        //TODO change to call BE 
        let currentUser = this.userService.getLoggedInUser();
        let transactionsArr = [];
        let transactionKey = "transaction_" + currentUser;
        if (this.localStorage.getItem(transactionKey)) {
            transactionsArr = angular.fromJson(this.localStorage.getItem(transactionKey));
        } else {
            transactionsArr = [];
        }
        return transactionsArr;
    }

    updateTransaction(transaction, dataForUpdate) {
        this._replaceTransaction(transaction, dataForUpdate);
    }

    deleteTransaction(transaction){
        this._deleteTransaction(transaction);
    }
}
