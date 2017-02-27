/**
 * Created by Олександр on 27.02.2017.
 */

/**
 * Register event handler for ui-router state change
 *
 * See https://github.com/angular-ui/ui-router/wiki for more information.
 */
export default function($scope, $state, userService){
    // Fired when the transition begins
    $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

        // When state name matches 'app.private.*'
        if(toState.name && toState.name.match(/^admin\./)){

            if(!userService.isLoggedInUserAdmin()){
                // Cancel state change
                event.preventDefault();

                // Redirect to home page
                return $state.go('home');
            }
        }
    });
}