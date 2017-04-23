/**
 * Created by Олександр on 26.02.2017.
 */
import HeaderController from "../../common/controller/HeaderController";
import transactionListController from "./controller/transactionListController";
import newTransactionController from "./controller/newTransactionCtrl";

import userMainTmpl from "./views/user.html";
import transactionsTmpl from "./views/transactions.html";
import newTransactionTmpl from "./views/newTransaction.html";
import headerTmpl from "../../../views/common/header.html";

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
            title: 'Transactions',
            adminRoleRequired: false,
            loginRequired: true,
            template: transactionsTmpl,
            controller: transactionListController,
            controllerAs: 'ctrl'
           /* resolve: {
                users: (transactionService) => {
                    return transactionService.getAllTransactions();
                }
            }*/
        })
        .state('user.newTransaction', {
            url: '/transaction',
            title: 'New transaction',
            loginRequired: true,
            adminRoleRequired: false,
            template: newTransactionTmpl,
            controller: newTransactionController,
            controllerAs: 'ctrl'
                /*views: {
                    'form': {
                        controller: CreateUserCtrl,
                        controllerAs: 'ctrl',
                        template: createUserFormTemplate
                    },
                    'list': {
                        controller: CreateUserListCtrl,
                        controllerAs: 'ctrl',
                        template: createUserListTemplate
                    }
                }*/
        });
};
