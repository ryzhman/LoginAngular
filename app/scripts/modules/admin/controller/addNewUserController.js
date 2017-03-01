'use strict';

export default class AddNewUserController{
	constructor(userService){
		this.userService = userService;
		console.log("Hello from AddNewUserController constructor");
	}

	addNewUser(){
		console.log({
			name: this.name,
			pass: this.pass,
			group: this.group
		});
		this.userService.addNewUser({
			name: this.name,
			pass: this.pass,
			group: this.group
		})

		

		this.name = '';
		this.pass = '';
		this.group = '';
	}

}
