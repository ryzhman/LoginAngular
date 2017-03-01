/**
 * Created by Олександр on 25.02.2017.
 */

export default class HeaderController{
    constructor($state, userService){
        let states = $state.get(); //just getting states
        this.states = states.filter((state) =>{ //getting their names
            // if(userService.getLoggedInUser() && state.title)
            return state.title;
        });
    }

}

