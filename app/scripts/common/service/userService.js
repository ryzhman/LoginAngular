/**
 * Created by Олександр on 25.02.2017.
 */

export default class UserService {
    constructor($filter) {
        this.userList = this.getUsers();
        this.loggedInUser = null;
        this.$filter = $filter;
    }

    userLogin(name, pass) {
        let user = this.getUser(name);
        if(user && user.pass === pass){
            this.loggedInUser = user;
            this.setLastLoginDate(this.loggedInUser);
            return user;
        }
    }

    isAdmin(user){
        return user.group === 'admins';
    }

    isLoggedInUserAdmin(){
        return this.loggedInUser.group === 'admins';
    }

    setLastLoginDate(user){
        user.lastLogin = this.$filter('date')(new Date(), 'medium');
        this.addUser(user);
    }

    getLoggedInUser(){
        return this.loggedInUser;
    }

    getUser(name) {
        for(let i=0; i<this.userList.length; i++){
            if(this.userList[i].name === name) {
                return this.userList[i];
            }
        }
    }

    //either update or create new
    addUser(newUser){
        let users = this.getUsers();
        users.push(newUser);
    }

    addNewUser(newUser) {
        this.userList.push(newUser);
        // localStorage.set(newUser.name, newUser);
    }

    getUsers(){
        return [
            {
                name: "admin",
                pass: "admin",
                group: "admins"
            },
            {
                name: "user1",
                pass: "user1",
                group: "users"
            }
        ];
    }

};