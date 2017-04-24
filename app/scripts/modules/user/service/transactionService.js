/**
 * Created by Олександр on 25.02.2017.
 */

export default class TransactionService {
    constructor($filter) {
        "use strict";
        "ngInject";

        this.$filter = $filter;
        this.transactionsArr = [];
        this.initStorage();
    }


    initStorage() {
        this.transactionsArr.push({
            date: new Date(),
            category: 'aaa',
            description: 'description',
            sum: 1999
        });
    }

    addNewTransaction(date, category, description, sum) {
        let transaction = {
            date: date,
            category: category,
            description: description,
            sum: sum
        };
        this.transactionsArr.push(transaction);
        return this.transactionsArr;
    }

    getAllTransactions() {
        //TODO change to call BE 
        return this.transactionsArr;
    }
}
