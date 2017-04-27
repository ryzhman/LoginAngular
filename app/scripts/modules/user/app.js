/**
 * Created by Олександр on 26.02.2017.
 */
import angular from "angular";
import commonRouter from "./router";
import transactionService from "./service/transactionService";
import categoryService from "./service/categoryService";

let userModule = angular.module('app.userModule', []);

userModule
.config(commonRouter)
.service('transactionService', transactionService)
.service('categoryService', categoryService);

export default userModule;
