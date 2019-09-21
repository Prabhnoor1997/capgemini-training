
    'use strict';

    angular.module('routerApp').controller('LoginCtrl',['$scope','services' , function ( $scope, services) {
       
    $scope.loginUser = function () {
        // let data = {}
        // data.email = $scope.email;
        // data.password = $scope.password;
        let data = {
            "email": $scope.email,
            "password": $scope.password
        }
        console.log("data--", data);
        services.login(data);
    }
    
             
    }])

   