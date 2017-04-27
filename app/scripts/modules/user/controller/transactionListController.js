/**
 * Created by Олександр on 26.02.2017.
 */

"use strict";
export default class TransactionListController {
    constructor($scope, $state, $filter, $rootScope, userService, user, transactionService, categoryService, $mdDialog) {
        "ngInject";


        this.$state = $state;
        this.userService = userService;
        this.transactionService = transactionService;
        this.categoryService = categoryService;

        this.$filter = $filter;
        this.updated = {};
        this.$mdDialog = $mdDialog;
        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this.currentTransaction = {};
        this.transactions = this.getAllTransactions();
        this.categories = this.loadCategories();
    }

    getAllTransactions() {
        return this.transactionService.getAllTransactions();
        //TODO change to call BE 
    }

    redirectToNewTransaction(isIncome) {
        this.transactionService.isIncome = isIncome;
        this.$state.go("user.newTransaction");
    }

    editTransaction(dataForUpdate, transaction) {
        this.updated = transaction;
        this.transactionService.updateTransaction(transaction, dataForUpdate);
        this.transactions = this.getAllTransactions();
    }

    showConfirm(ev) {
        let contr = this;
        let confirm = this.$mdDialog.confirm()
            .title('Would you like to delete this transaction?')
            .textContent('Information cannot be restored after this step')
            .targetEvent(ev)
            .ok('Delete')
            .cancel('Cancel');

        this.$mdDialog.show(confirm).then(() => {
            contr.deleteTransaction(contr.currentTransaction);
        }, () => {
            contr.backToTransactionsList();
        });
    };

    storeCurrent(transaction) {
        this.currentTransaction = transaction;
    }

    deleteTransaction(transaction) {
        this.transactionService.deleteTransaction(transaction);
        this.transactions = this.getAllTransactions();
    }

    showCategory(transaction) {
        let selected = [];
        if (transaction.category) {
            selected = this.$filter('filter')(this.categoryService.getCategories(), { value: transaction.category });
        }
        return selected.length ? selected[0].title : 'n/a';
    }

    getBalance() {
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

    loadCategories() {
        return this.categoryService.getAllCategories();
    }
}
