/**
 * Created by Олександр on 25.02.2017.
 */

export default class HeaderController{
    constructor($state){
        let states = $state.get(); //just getting states
        this.states = states.filter((state) =>{ //getting their names
            return state.title;
        });
    }

}

