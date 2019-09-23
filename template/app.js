/**
 * Created by miha on 01.04.2015 10:30.
 */
var app = angular.module("app", ['ui.router', 'dx']);
app.controller("mainCtrl", ["$rootScope", "$scope",
    function ($rootScope, $scope) {

        // Globalize.culture(svcUser.getUserLanguage());
        // console.log("svcUser.getUserLanguage()", svcUser.getUserLanguage());

        $rootScope.app_version = "build 24.03.2017 v1";



        $log.info("Angular application started!");
        //console.log($localStorage.token);
    }
]);
