/**
 * Created by Олександр on 25.02.2017.
 */
export default class UserService {
    constructor($filter) {
        "use strict";

        "ngInject";

        this.userList = this.users = [{
            name: "admin",
            pass: "admin",
            group: "admins"
        }, {
            name: "user1",
            pass: "user1",
            group: "users"
        }];
        this.loggedInUser = null;
        this.$filter = $filter;
    }

    userLogin(name, pass) {
        "use strict";

        let user = this.getUser(name);
        if (user && user.pass === pass) {
            this.loggedInUser = user;
            this.setLastLoginDate(this.loggedInUser);
            return user;
        }
    }

    isAdmin(user) {
        "use strict";

        return user.group === 'admins';
    }

    isLoggedInUserAdmin() {
        "use strict";

        return this.loggedInUser.group === 'admins';
    }

    setLastLoginDate(user) {
        "use strict";

        user.lastLogin = this.$filter('date')(new Date(), 'medium');
    }

    getLoggedInUser() {
        "use strict";

        return this.loggedInUser;
    }

    getUser(name) {
        "use strict";

        for (let i = 0; i < this.userList.length; i++) {
            if (this.userList[i].name === name) {
                return this.userList[i];
            }
        }
    }

    //either update or create new
    addUser(newUser) {
        "use strict";

        let users = this.getUsers();
        users.push(newUser);
    }

    addNewUser(newUser) {
        "use strict";

        this.userList.push(newUser);
    }

    getUsers() {
        "use strict";

        return this.userList;
    }

}
