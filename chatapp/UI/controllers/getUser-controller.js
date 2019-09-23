
'use strict';

angular.module('routerApp').controller('DashboardCtrl', ['$scope', 'services', function ($scope, services) {
    $scope.getUser = function (){
        console.log("inside the getUser controller");
        services.getUser(function (err, res) {
            if (err)
                return err
            if (res) {
                $scope.data = res;
            }
        });



    }
    $scope.getUser();
   

      


}])

