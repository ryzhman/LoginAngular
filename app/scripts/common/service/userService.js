/**
 * Created by Олександр on 25.02.2017.
 */
export default class UserService {
    constructor($filter, $window) {
        "use strict";

        "ngInject";

        this.loggedInUser = null;
        this.$filter = $filter;
        this.$window = $window;
        this._init();
    }

    _init() {
        'use strict';
        let userList = this.users = [{
            email: "admin@gmail.com",
            name: "admin",
            password: "admin",
        }, {
            email: "user@gmail.com",
            name: "user",
            password: "user"
        }];
        let users = [];
        userList.forEach(item =>
            users.push({
                "email": item.email,
                "name": item.name,
                "password": item.password
            })
        );
        this.$window.localStorage.setItem("users", angular.toJson(users));
    }

    userLogin(email, pass) {
        "use strict";

        let user = this.getUser(email);
        if (user && user.password === password) {
            this.loggedInUser = user;
            this.setLastLoginDate(this.loggedInUser);
            return user;
        }
    }

    setLastLoginDate(user) {
        "use strict";

        user.lastLogin = this.$filter('date')(new Date(), 'medium');
    }

    getLoggedInUser() {
        "use strict";

        return this.loggedInUser;
    }

    getUser(email) {
        "use strict";

        let allUsers = this.$window.localStorage.getItem('users');
        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email === email) { //todo change to filter
                return allUsers[i];
            }
        }
    }

    //either update or create new
    addUser(newUser) {
        "use strict";

        let users = this.getUsers();
        console.log(users);
        users.push(newUser);
        this.storeUsers(users);
    }

    getUsers() {
        "use strict";
        console.log(angular.fromJson(this.$window.localStorage.getItem('users')));
        return angular.fromJson(this.$window.localStorage.getItem('users'));
    }

    storeUsers(usersArr) {
        "use strict";
        this.$window.localStorage.setItem('users', usersArr);
    }

}
