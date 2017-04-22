/**
 * Created by Олександр on 25.02.2017.
 */
export default class TransactionService {
    constructor($filter) {
        "use strict";

        "ngInject";

        this.$filter = $filter;
        this.initStorage();
    }

    initStorage() {
        this.window.localStorage.setItem("trnsact", JSON.stringify([{
            'date': 123,
            'category': 'aaa',
            'description': 'description',
            'sum': 1999
        }]));
    }

    _storeTransaction(transactionsArr) {
        console.log("_storeTransaction");
        this.window.localStorage.setItem("trnsact", JSON.stringify(transactionsArr));
    }

    addNewTransaction(date, category, description, sum) {
        let transaction = {
            'date': date,
            'category': category,
            'description': description,
            'sum': sum
        };
        let allTransactions = JSON.parse(this.window.localStorage.getItem("trnsact"));
        allTransactions.push(transaction);

        this._storeTransaction(allTransactions);
    }

    getAllTransactions() {
        //TODO change to call BE 
        console.log("getAllTransactions");
        return JSON.parse(this.window.localStorage.getItem("trnsact"));
    }
}
