/**
 * Created by Олександр on 26.02.2017.
 */

"use strict";
export default class CategoryController {
    constructor($state, $scope, categoryService, userService) {
        "ngInject";

        this.$state = $state;
        this.categoryService = categoryService;
        this.parentCats = this.getAllParentCategories();
        this.cats = this.getAllCategories();
        this.updated = {}
        this.user = userService.getLoggedInUser();
    }

    addNewCategory() {
        this.categoryService.addNewCategory(this.parentCategory, this.title, this.user);
        this.backToCategoryList();
    }

    getAllCategories() {
        return this.categoryService.getAllCategories();
        //TODO change to call BE 
    }

    getAllParentCategories() {
        return this.categoryService.getParentCategories();
        //TODO change to call BE 
    }

    editCategory(dataForUpdate, cat) {
        this.updated = cat;
        this.categoryService.updateCategory(cat, dataForUpdate);
        this.cats = this.getAllCategories();
    }

    backToCategoriesList() {
        this.title = null;
        this.parentCategory = null;
        this.$state.go("user.allCategories");
    }

    showConfirm(ev) {
        let contr = this;
        let confirm = this.$mdDialog.confirm()
            .title('Would you like to delete this category?')
            .textContent('Information cannot be restored after this step')
            .targetEvent(ev)
            .ok('Delete')
            .cancel('Cancel');

        this.$mdDialog.show(confirm).then(() => {
            contr.deleteCategory(contr.current);
        }, () => {
            contr.backToCategoriesList();
        });
    };

    storeCurrent(cat) {
        this.current = cat;
    }

    deleteCategory(cat) {
        this.categoryService.deleteCategory(cat, this.user);
        this.cats = this.getAllCategories();
    }



}
