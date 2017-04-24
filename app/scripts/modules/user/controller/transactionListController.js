/**
 * Created by Олександр on 26.02.2017.
 */
// import transactionService from './service/transactionService';

export default class TransactionListController {
    constructor($state, $scope, $rootScope, $localStorage, $sessionStorage, transactionService) {
        "use strict";
        "ngInject";

        this.$state = $state;
        this.transactionService = transactionService;
        // $rootScope.$storage = $localStorage;
        // this.$rootScope = $rootScope;
        // this.$scope = $scope;
        // $scope.$storage = $localStorage;
        // this.storage = $scope.$storage;
        // this.storage = $rootScope.$storage;
        // this.initStorage();
        // this.$mdDialog = $mdDialog;
    }

    /*initStorage() {
        this.storage.trnsact = [{
            date: new Date(),
            category: 'aaa',
            description: 'description',
            sum: 1999
        }];
    }*/

    /* _storeTransaction(transactionsArr) {
         this.storage.trnsact = transactionsArr;
     }*/

    addNewTransaction() {
        // let allTransactions = this.storage.trnsact;
        this.transactionService.addNewTransaction(this.date, this.category, this.description, this.sum);

        // this.storage.trnsact = allTransactions;

        // this._storeTransaction(allTransactions);
        this.backToTransactionsList();
    }

    getAllTransactions() {
        return this.transactionService.getAllTransactions();
        //TODO change to call BE 
        // console.log(this.$rootScope.$storage.trnsact);
        // console.log(this.storage);

        // return this.storage.trnsact;
        // return this.transactionList;
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

    newTransactionModal() {
        // $('#modal1').modal('open');
        // this.$scope.openModal = true;
        // $(document).ready(function() {
        //     $('.modal1').leanModal();
        // });

    }

    /* readyCallback() {
         Materialize.toast("Modal ready", 4000);
     }*/

    /*  showPrompt(ev) {
          // Appending dialog to document.body to cover sidenav in docs app
          var confirm = this.$mdDialog.prompt()
              .title('What would you name your dog?')
              .textContent('Bowser is a common name.')
              .placeholder('Dog name')
              .ariaLabel('Dog name')
              .initialValue('Buddy')
              .targetEvent(ev)
              .ok('Okay!')
              .cancel('I\'m a cat person');

          this.$mdDialog.show(confirm).then(function(result) {
              this.$scope.status = 'You decided to name your dog ' + result + '.';
          }, function() {
              this.$scope.status = 'You didn\'t name your dog.';
          });
      };*/



}
