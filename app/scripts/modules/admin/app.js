/**
 * Created by Олександр on 26.02.2017.
 */

'use strict';

import angular from "angular";
import commonRouter from "./router";

let adminModule = angular.module('app.adminModule', []);
adminModule.config(commonRouter);


export default adminModule;

