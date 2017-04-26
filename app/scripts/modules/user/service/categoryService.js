/**
 * Created by Олександр on 25.02.2017.
 */

export default class CategoryService {
    constructor($filter, $window) {
        "use strict";
        "ngInject";

        this.$filter = $filter;
        this.localStorage = $window.localStorage;
        this.parentCats = [];
        this._initStorage();
    }


    _initStorage() {
        let cats = [{
            "parentCat": "Daily spendings",
            "value":"grocary",
            "title": "Grocary"
        }, {
            "parentCat": "Daily spendings",
            "value":"restaurants",
            "title": "Restaurants"
        }, {
            "parentCat": "Daily spendings",
            "value":"commuting",
            "title": "Commuting"
        }, {
            "parentCat": "Monthly spendings",
            "value":"house",
            "title": "Payment for house maintanence"
        }, {
            "parentCat": "Monthly spendings",
            "value":"electricity",
            "title": "Electricity"
        }, {
            "parentCat": "Monthly spendings",
            "value":"gas",
            "title": "Gas"
        }, {
            "parentCat": "Quarterly spendings",
            "value":"taxes",
            "title": "Taxes"
        }, {
            "parentCat": "Yearly spendings",
            "value":"bdays",
            "title": "Birthdays presents"
        }];
        this.localStorage.setItem("categories", angular.toJson(cats));
    }

    _updateCategories(catsArr) {
        this.localStorage.setItem("categories", angular.toJson(catsArr));
    }

    getCategories() {
        return angular.fromJson(this.localStorage.getItem("categories"));
    }

    addNewCategory(parentCategory, title) {
        let category = {
            parentCategory: this.parentCategory,
            title: this.title
        };
        let allCats = this.getCategories();
        allCats.push(category);
        _updateCategories(allCats);
    }
}
