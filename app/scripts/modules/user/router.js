/**
 * Created by Олександр on 26.02.2017.
 */
import HeaderController from "../../common/controller/HeaderController";
import transactionListController from "./controller/transactionListController";
// import addNewUserController from "./controller/addNewUserController";
import userMainTmpl from "./views/user.html";
import transactionsTmpl from "./views/transactions.html";
// import addNewUserTmpl from "./views/addNewUser.html";
import headerTmpl from "../../../views/common/header.html";
import transactionService from "./service/transactionService";

export default ($stateProvider) => {
    "use strict";

    "ngInject";

    let header = {
        template: headerTmpl,
        controller: HeaderController,
        controllerAs: 'ctrl'
    };

    $stateProvider
        .state('user', {
            abstract: true,
            url: '/user',
            adminRoleRequired: false,
            loginRequired: true,
            views: {
                'header': header,
                '': {
                    template: userMainTmpl,
                }
            }
        })
        .state('user.allTransactions', {
            url: '/transactions',
            title: 'Transactions list',
            orderNumber: 2,
            adminRoleRequired: false,
            loginRequired: true,
            template: transactionsTmpl,
            controller: transactionListController,
            controllerAs: 'ctrl',
            resolve: {
                transactionList: (transactionService) => {
                    return transactionService.getAllTransactions();
                }
            }
        });
};
