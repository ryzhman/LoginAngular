/**
 * Created by Олександр on 25.02.2017.
 */

export default class LoginController{
    constructor(userService, $state){
        this.userService = userService;
        this.$state = $state;
    };

    userLogin(){
        let name = this.login;
        let pswd = this.pass;

        this.login = '';
        this.pass = '';

        let user = this.userService.userLogin(name, pswd);

        if(!user){
            alert("Error during logging in");
        }

        if(this._isAdmin(user)) {
            this.$state.go('admin.allUsers');
        } else {
            this.$state.go('about');
        }

    }

    _isAdmin(user){
        return user.group === 'admins';
    }
}