/**
 * Created by Олександр on 26.02.2017.
 */

"use strict";
export default class NewTransactionController {
    constructor($state, userService, transactionService) {
        "ngInject";

        this.$state = $state;
        this.userService = userService;
        this.transactionService = transactionService;
        this.isIncome = this.transactionService.isIncome;
        console.log(this.isIncome);
        console.log(this.transactionService.isIncome);
        // this.sumStyle = {'color':'yellow'};

        this._checkColor();
    }

    _checkColor(){
        console.log(this.isIncome);
        this.isIncome ? this._turnGreen : this._turnRed;
    }

    _turnGreen() {
        console.log("_turnGreen");
        this.sumStyle = {'color':'green'};
    }

    _turnRed() {
        console.log("!_turnGreen");
        this.sumStyle = {'color':'red'};
    }

    addNewTransaction() {
        let id = this.sum + "" + new Date().getMinutes() + "" + new Date().getHours();
        this.transactionService.addNewTransaction(id, this.date, this.category, this.description, this.isIncome ? this.sum : -this.sum);
        this.backToTransactionsList();
        this.$state.go('user.allTransactions');
    }

    backToTransactionsList() {
        this.date = null;
        this.category = null;
        this.description = null;
        this.sum = null;
        this.$state.go("user.allTransactions");
    }

}
