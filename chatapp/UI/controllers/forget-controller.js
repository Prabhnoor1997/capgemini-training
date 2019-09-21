    'use strict';

    angular.module('routerApp').controller('ForgetCtrl',['$scope','services' , function ( $scope, services) {
       
    $scope.forgetUser = function () {
        let data = {
            "email": $scope.email
        }
        console.log("data--", data);
        services.forget(data);
    }
  
             
    }])

   