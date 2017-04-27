(function(){
    angular.module('startup')
.controller('PayOffline', ['$scope','$rootScope', '$state', '$http', function($scope,$rootScope, $state, $http){
        
        $scope.Pay = function(){
 
            $http.post('/offline/'+$rootScope.id, $scope.newUser).success(function(response){
      $scope.newUser=response;
            
            }).error(function(error){
                console.log(error);
            });
             $state.go('menna', { reload: true });
        };
    }]);
}());