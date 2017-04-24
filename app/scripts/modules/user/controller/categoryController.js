/**
 * Created by Олександр on 26.02.2017.
 */

export default class CategoryController {
    constructor($state, $scope, categoryService) {
        "use strict";
        "ngInject";

        this.$state = $state;
        this.categoryService = categoryService;
    }


    addNewCategory() {
        this.categoryService.addNewCategory(this.parentCategory, this.title);
        this.backToCategoryList();
    }

    getAllCategories() {
        return this.categoryService.getAllCategories();
        //TODO change to call BE 
    }

    getAllParentCategories() {
        return this.categoryService.getAllParentCategories();
        //TODO change to call BE 
    }

    editTransaction(transactionId) {

    }

    backToTransactionsList() {
        this.title = null;
        this.parentCategory = null;
        this.$state.go("user.allCategories");
    }

}
