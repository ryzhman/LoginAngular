/**
 * Created by Олександр on 26.02.2017.
 */
import angular from "angular";
// import ngStorage from "angular-local-storage";
import commonRouter from "./router";
import transactionService from "./service/transactionService";

let userModule = angular.module('app.userModule', []);
userModule
.config(commonRouter)
.service('transactionService', transactionService);

export default userModule;
