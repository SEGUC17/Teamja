

(function(){
    angular.module('startup')
.controller('BookingCtrl', ['$scope','$rootScope', '$state', '$http', function($scope,$rootScope, $state, $http){
        
        $scope.book = function(){

            $http.post('/booking/' + $rootScope.id, $scope.booked).success(function(response){
               $scope.booked=response;
            }).error(function(error){
                console.log(error);
            })
        }
    }]);
}());
