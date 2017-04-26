/**
 * Created by Олександр on 26.02.2017.
 */
import HeaderController from "../../common/controller/HeaderController";
import transactionListController from "./controller/transactionListController";
import newTransactionController from "./controller/newTransactionController";
import categoryController from "./controller/categoryController";

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
            },
            resolve: {
                user: (userService, $state, $q, $timeout) => {
                    // return userService.getCurrentUser();

                    let user = userService.getLoggedInUser();

                    let deffered = $q.defer();
                    if (user) {
                        deffered.resolve(user); //
                    } else {
                        $timeout(() => { //hack to place this transtion to the end of stack (will be executed after initial transition is finished)
                            $state.go('login');
                        });
                        deffered.resolve(null);
                    }
                    return deffered.promise;
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
            controller: newTransactionController, 
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
            controller: categoryController, //each state - controller
            controllerAs: 'ctrl'
        });
};
