/**
 * Created by Олександр on 26.02.2017.
 */

export default class TransactionListController {
    constructor($state, $scope, $rootscope, $localStorage, $sessionStorage, transactionService) {
        "use strict";
        "ngInject";


        this.transactionService = transactionService;
        $rootscope.$storage = $localStorage;
        this.storage = $rootscope.$storage;
        this.initStorage();
        this.transactionList = this.storage.trnsact;
        this.$scope = $scope;
        this.date = new Date();
        // this.$mdDialog = $mdDialog;
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
        //TODO change to call BE 
        return this.storage.trnsact;
    }



    editTransaction(transactionId) {

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
