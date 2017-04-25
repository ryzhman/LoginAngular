/**
 * Created by Олександр on 26.02.2017.
 */
import HeaderController from "../../common/controller/HeaderController";
import transactionListController from "./controller/transactionListController";
import categoryController from "./controller/categoryController";
// import newCategoryController from "./controller/newTransactionCtrl";

import userMainTmpl from "./views/user.html";
import transactionsTmpl from "./views/transactions.html";
import categoriesTmpl from "./views/categories.html";
import newTransactionTmpl from "./views/newTransaction.html";
import newCategoryTmpl from "./views/newCategory.html";
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
            loginRequired: true,
            template: transactionsTmpl,
            controller: transactionListController,
            controllerAs: 'ctrl'
        })
        .state('user.newTransaction', {
            url: '/transaction',
            title: 'New transaction',
            loginRequired: true,
            template: newTransactionTmpl,
            controller: transactionListController,
            controllerAs: 'ctrl'
        })
        .state('user.allCategories', {
            url: '/categories',
            title: 'Categories',
            loginRequired: true,
            template: categoriesTmpl,
            controller: categoryController,
            controllerAs: 'ctrl'
        })
        .state('user.newCategory', {
            url: '/category',
            title: 'Add new category',
            loginRequired: true,
            template: newCategoryTmpl,
            controller: categoryController,
            controllerAs: 'ctrl'
        });
};
