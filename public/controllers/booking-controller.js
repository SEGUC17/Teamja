(function(){
    angular.module('startup')
.controller('BookingController', ['$scope','$rootScope', '$state', '$http', function($scope,$rootScope, $state, $http){
        
        $scope.book = function(){

            $http.post('/booking/' + $rootScope.id+'/'+$rootScope.name, $scope.booked).success(function(response){
               $scope.booked=response;
            }).error(function(error){
                console.log(error);
            })
         $state.go('userprofile', { reload: true }) }
    }]);
}());