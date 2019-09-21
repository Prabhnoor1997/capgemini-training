
    'use strict';

    angular.module('routerApp').controller('RegisterCtrl',['$scope','services' , function ( $scope, services) {
       
    $scope.registerUser = function () {
        if($scope.password == $scope.conPassword)
        {
            let data = {
                "email": $scope.email,
                "firstName": $scope.firstName,
                "lastName": $scope.lastName,
                "password": $scope.password
            }
            console.log("data--", data);
            services.register(data);

        }
        else
        {
            console.log("password doesnt match")
        }
        
    }
    
             
    }])

   