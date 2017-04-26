/**
 * Created by Олександр on 25.02.2017.
 */
"use strict";
export default class UserService {
    constructor($filter, $window) {
        "ngInject";

        this.loggedInUser = null;
        this.$filter = $filter;
        this.$window = $window;
        this._init();
    }

    _init() {
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
        let user = this.getUser(email);
        if (user && user.password === pass) {
            // this.loggedInUser = user.email;
            this._storeCurrentUser(this.loggedInUser);
            return user;
        }
    }

    userLogout(){
        console.log(this.getLoggedInUser());
        this.$window.localStorage.removeItem('currentUser');
        this.loggedInUser = null;
    }

    _storeCurrentUser(user) {
        this.$window.localStorage.setItem('currentUser', user);
    }

    getLoggedInUser() {
        return this.$window.localStorage.getItem('currentUser');
    }

    // for user router
    /*getCurrentUser() {
        "use strict";
        let deffered = $q.defer();
        if (this.loggedInUser) {
            deffered.resolve(this.loggedInUser);
        } else {
            deffered.reject(null);
        }
        return deffered.promise;
    }*/


    getUser(email) {
        let allUsers = angular.fromJson(this.$window.localStorage.getItem('users'));
        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email === email) { //todo change to filter
                return allUsers[i];
            }
        }
    }

    //either update or create new
    addUser(newUser) {
        let users = this.getUsers();
        users.push(newUser);
        this.storeUsers(angular.toJson(users));
    }

    getUsers() {
        return angular.fromJson(this.$window.localStorage.getItem('users'));
    }

    storeUsers(usersArr) {
        this.$window.localStorage.setItem('users', usersArr);
    }

}
