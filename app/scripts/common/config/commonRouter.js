/**
 * Created by Олександр on 25.02.2017.
 */
import headerController from "../controller/HeaderController";
import homeController from "../controller/HomeConroller";
import aboutController from "../controller/AboutController";
import loginController from "../controller/LoginController";

export default ($stateProvider, $locationProvider, $urlRouterProvider) => {
    let header = {
        templateUrl: '/app/views/common/header.html',
        controller: headerController,
        controllerAs: 'ctrl'
    };

    $locationProvider.hashPrefix("!");

    $stateProvider
        .state('login', {
                url: '/login',
                title: "Login",
                views: {
                    'header': header,
                    '': {
                        templateUrl: '/app/views/common/login.html',
                        controller: loginController,
                        controllerAs: 'ctrl'
                    }
                }
            }
        )
       .state("home", {
                url: "/home",
                title: 'Home',
                views: {
                    'header': header,
                    '': {
                        templateUrl: '/app/views/user/home.html',
                        controller: homeController,
                        controllerAs: 'ctrl'
                    }
                }

            }
        )
        .state("about", {
                url: '/about',
                title: 'About',
                views: {
                    'header': header,
                    '': {
                        templateUrl: '/app/views/common/about.html',
                        controller: aboutController,
                        controllerAs: 'ctrl'
                    }
                }
            }
        );

    $urlRouterProvider.otherwise('/home');
}