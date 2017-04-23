/**
 * Created by Олександр on 25.02.2017.
 */
export default class TransactionService {
    constructor($filter/*, $scope, $localStorage, $sessionStorage*/) {
        "use strict";
        "ngInject";

        this.$filter = $filter;
        // $scope.$storage = $localStorage;
        // console.log($storage);
       /* this.initStorage();
        this.window = this.window;
        console.log(this.window);*/
        
    }

    /*initStorage() {
        $storage.trnsact = JSON.stringify([{
            'date': 123,
            'category': 'aaa',
            'description': 'description',
            'sum': 1999
        }]);
    }

    _storeTransaction(transactionsArr) {
        console.log("_storeTransaction");
        
        // this.window.localStorage.setItem("trnsact", JSON.stringify(transactionsArr));
        $storage.trnsact = JSON.stringify(transactionsArr);
    }

    addNewTransaction(date, category, description, sum) {
        let transaction = {
            'date': date,
            'category': category,
            'description': description,
            'sum': sum
        };
        let allTransactions = JSON.parse($scope.$storage.getItem("trnsact"));
        allTransactions.push(transaction);

        this._storeTransaction(allTransactions);
    }

    getAllTransactions() {
        console.log($storage);
        console.log(JSON.parse(this.$localStorage.getItem("trnsact")));
        //TODO change to call BE 
        return JSON.parse($localStorage.getItem("trnsact"));
    }*/
}
