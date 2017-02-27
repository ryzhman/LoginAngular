/**
 * Created by Олександр on 26.02.2017.
 */

'use strict';

import angular from "angular";
import commonRouter from "./router";
import eventHandler from "/app/scripts/common/config/EventHandler";
import userService from "../../common/service/userService";

console.log($scope);
let adminModule = angular.module('app.adminModule', []);
adminModule.config(commonRouter);
adminModule.run(eventHandler($scope, $state, userService));


export default adminModule;

