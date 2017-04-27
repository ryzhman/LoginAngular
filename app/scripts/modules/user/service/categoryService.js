/**
 * Created by Олександр on 25.02.2017.
 */

export default class CategoryService {
    constructor($filter, $window, userService) {
        "use strict";
        "ngInject";

        this.$filter = $filter;
        this.localStorage = $window.localStorage;
        this.parentCats = [];
        this.cats = [];
        this.userService = userService; //todo THROW EVENT and inform everyone about logout
        this._initStorage();
    }


    _initStorage() {
        this.cats = [{
            "parentCat": "Daily spendings",
            "value": "grocary",
            "title": "Grocary"
        }, {
            "parentCat": "Daily spendings",
            "value": "restaurants",
            "title": "Restaurants"
        }, {
            "parentCat": "Daily spendings",
            "value": "commuting",
            "title": "Commuting"
        }, {
            "parentCat": "Monthly spendings",
            "value": "house",
            "title": "Payment for house maintanence"
        }, {
            "parentCat": "Monthly spendings",
            "value": "electricity",
            "title": "Electricity"
        }, {
            "parentCat": "Monthly spendings",
            "value": "gas",
            "title": "Gas"
        }, {
            "parentCat": "Quarterly spendings",
            "value": "taxes",
            "title": "Taxes"
        }, {
            "parentCat": "Yearly spendings",
            "value": "bdays",
            "title": "Birthdays presents"
        }];

        this.parentCats = [{
            "title": "Daily spendings"
        }, {
            "title": "Monthly spendings"
        }, {
            "title": "Quarterly spendings"
        }, {
            "title": "Yearly spendings"
        }];


        this.cats.forEach(cat => {
            cat.id = this._createId(cat);
        });
        console.log(this.cats);
        this.localStorage.setItem("categories_" + this.userService.getLoggedInUser(), angular.toJson(this.cats));

        this.parentCats.forEach(cat => {
            cat.id = this._createId(cat);
        });
        console.log(this.parentCats);
        this.localStorage.setItem("parentCats_" + this.userService.getLoggedInUser(), angular.toJson(this.parentCats));
    }

    _createId(cat) {
        let id = cat.title.charAt(1) + Math.random() * 10;
        return id;
    }

    _updateCategories(catsArr, user) {
        this.localStorage.setItem("categories_" + user, angular.toJson(catsArr));
    }

    _replaceCategory(cat, dataForUpdate) {
        let updatedArr = this.getAllCategories();
        updatedArr.forEach(elem => {
            if (elem.id === cat.id) {
                for (let i = 0; i < Object.keys(cat).length; i++) {
                    let key = Object.keys(cat)[i];
                    if (key !== 'id') {
                        elem[key] = dataForUpdate[key];
                        console.log("inside", elem);
                    }
                }
            }
        });
        this._storeCategories(this.userService.getLoggedInUser(), updatedArr);
    }

    getAllCategories() {

        return angular.fromJson(this.localStorage.getItem("categories_" + this.userService.getLoggedInUser()));
    }

    getParentCategories() {
        return angular.fromJson(this.localStorage.getItem("categories_" + this.userService.getLoggedInUser()));
    }

    deleteCategory(cat) {
        this._deleteCategory(cat);
    }

    _deleteCategory(cat) {
        let updatedArr = this.getAllCategories();
        updatedArr.forEach(elem => {
            if (elem.id === cat.id) {
                let indexOfElemToRemove = updatedArr.indexOf(elem);
                updatedArr.splice(indexOfElemToRemove, 1);
            }
        });
        this._storeCategories(this.userService.getLoggedInUser(), updatedArr);
    }

    _storeCategories(user, category) {
        this.localStorage.removeItem("categories_" + user);
        this.localStorage.setItem("categories_" + user, angular.toJson(category));
    }

    updateCategory(cat, dataForUpdate) {
        this._replaceCategory(cat, dataForUpdate);
    }


    addNewCategory(parentCategory, title, user) {
        let category = {
            parentCategory: this.parentCategory,
            title: this.title
        };
        let allCats = this.getCategories();
        allCats.push(category);
        _updateCategories(allCats, user);
    }

}
