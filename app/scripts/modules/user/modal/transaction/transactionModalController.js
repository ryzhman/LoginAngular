'use strict';

export default class TransactionModalController {
    constructor($uibModalInstance, transactionService, $scope) {
        'ngInject';

        this.$uibModalInstance = $uibModalInstance;
        this.transactionService = transactionService;
        this.$scope = $scope;
    }

    close() {
        this.$uibModalInstance.close('closed');
    }

    addNewTransaction(date, category, description, sum) {

        let transaction = {
            'date': date,
            'category': category,
            'description': description,
            'sum': sum
        };
        console.log(transaction);
        let allTransactions = this.$scope.trnsact;
        allTransactions.push(transaction);

        this.$scope.trnsact = transactionsArr;

    }
}
