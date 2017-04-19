/**
 * Created by Олександр on 25.02.2017.
 */
export default class TransactionService {
    constructor($filter, $window) {
        "use strict";

        "ngInject";

        this.$filter = $filter;
        this.window = $window;
        this.initStorage();
    }

    initStorage() {
        this.window.localStorage.setItem("t1", JSON.stringify([{
            'date': 123,
            'category': 'aaa',
            'description': 'description',
            'sum': 1999
        }])
    );
}

getAllTransactions() {
    return JSON.parse(this.window.localStorage.getItem("t1"));
}



}
