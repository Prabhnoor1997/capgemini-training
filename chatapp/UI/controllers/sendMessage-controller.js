
'use strict';

angular.module('routerApp').controller('ChatCtrl', ['$scope', '$socket', function ($scope, $socket) {
    $scope.emitBasic = function (){

        $socket.on('echo', function (data) {
            $scope.serverResponse = data;
        });
        $scope.emitBasic = function emitBasic() {
            $socket.emit('echo', $scope.dataToSend);
            $scope.dataToSend = '';
        };
     
        $scope.emitACK = function emitACK() {
            $socket.emit('echo-ack', $scope.dataToSend, function (data) {
                $scope.serverResponseACK = data;
            });
            $scope.dataToSend = '';
        };
   
        



    }
    $scope.emitBasic();
   

      


}])

