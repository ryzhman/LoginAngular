/**
 * Created by Олександр on 25.02.2017.
 */

export default class CategoryService {
    constructor($filter) {
        "use strict";
        "ngInject";

        this.$filter = $filter;
        this.categoryArr = [];
        this.parentCats = [];
        this.initStorage();
    }


    initStorage() {
        this.categoryArr.push({
            parentCategory: "Daily",
            title: "Grocary"
        });

        this.parentCats.push([{
                title: "Daily",
            }, {
                title: "Weekly"
            }, {
                title: "Monthly"
            },
            title: 'Quarterly'
        }, {
            title: 'Yearly'
        }]);
}

addNewCategory(parentCategory, title) {
    let category = {
        parentCategory: this.parentCategory,
        title: this.title
    };
    this.categoryArr.push(category);
    return this.categoryArr;
}

getAllCategories() {
    //TODO change to call BE 
    return this.categoryArr;
}

getAllParentCategories() {
    return this.parentCats;
}
}
