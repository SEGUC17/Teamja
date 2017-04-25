(function(){
    angular.module('startup')
.controller('AddratingController', ['$scope','$rootScope', '$state', '$http', function($scope,$rootScope, $state, $http){
        
        $scope.addrating = function(rating){
 
            $http.post('/rating/'+$rootScope.Title, $scope.rating).success(function(response){
      $scope.rating=response;
            
            }).error(function(error){
                console.log(error);
            });
             $state.go('addrating', { reload: true });
        };
    }]);
}());