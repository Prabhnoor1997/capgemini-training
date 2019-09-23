
'use strict';

angular.module('routerApp').controller('ResetCtrl', ['$scope', 'services', '$stateParams', function ($scope, services, $stateParams) {


    $scope.resetUser = function () {
        $scope.id = $stateParams.token;
        console.log($scope.id);
        if ($scope.password == $scope.conPassword) {
            let data = {
                "password": $scope.password
            }
            console.log("data--", data);
            services.reset(data, $scope.id);

        }
        else {
            console.log("password doesnt match")
        }

    }


}])

