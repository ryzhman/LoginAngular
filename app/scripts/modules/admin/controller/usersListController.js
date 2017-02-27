/**
 * Created by Олександр on 26.02.2017.
 */
'use strict';

export default class UsersListController{
    constructor(/*$state,*/ $state, users){
        this.userList = users;
        // this.$state = $state;
    }
}