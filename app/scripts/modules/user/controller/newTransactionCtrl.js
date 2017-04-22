export default class NewTransactionCtrl {
    constructor($state, transactionService) {
        "use strict";
        "ngInject";

        this.$state = $state;
        this.transactionService = transactionService;
    }

    addNewTransaction() {
        "use strict";
        this.transactionService.addNewTransaction(
            this.date,
            this.category,
            this.description,
            this.sum
        );
    }
}
