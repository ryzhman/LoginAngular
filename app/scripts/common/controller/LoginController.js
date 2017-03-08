/**
 * Created by Олександр on 25.02.2017.
 */

export default class LoginController {
    constructor(userService, $state) {
        this.userService = userService;
        this.$state = $state;
        // console.log($rootScope);
        // $rootScope.$on('$routeChangeSuccess', (event, data) => {
        //     console.log("Logintrl event as triggered");
        //     $rootScope.pageTitle = "Login page";
        // });
    };

    userLogin() {
        let user = this.userService.userLogin(this.login, this.pass);
        this.login = '';
        this.pass = '';

        if (!user) {
            alert("Error during logging in");
            this.$state.go('login');
        } else {
            if (this.userService.isAdmin(user)) {
                this.$state.go('admin.allUsers');
            } else {
                this.$state.go('about');
            }
        }
    }
}
