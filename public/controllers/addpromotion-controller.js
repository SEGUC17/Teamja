(function(){
    angular.module('startup')
.controller('AddpromotionController', ['$scope', '$state', '$rootScope','$http', function($scope, $state,$rootScope, $http){
             
 console.log($rootScope.User);  


        $scope.addpromotion = function(){
 
            $http.post('/promotion/'+ $rootScope.User,$scope.promotion).success(function(response){
      $scope.promotion=response;
      	$state.go('profile', { reload: true });
            
            }).error(function(error){
                console.log(error);
           
            });
       $state.go('profile', { reload: true }); };
    }]);
}());