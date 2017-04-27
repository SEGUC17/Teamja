

(function(){
    angular.module('startup')
.controller('Change', ['$scope','$rootScope', '$state', '$http', function($scope,$rootScope, $state, $http){
        
        $scope.submit= function(){

            $http.post('/change/' + $rootScope.User, $scope.newUser).success(function(response){

               $scope.newUser=response;
                              $state.go('profile', { reload: true });
            
            }).error(function(error){
                console.log(error);
            })
        $state.go('profile', { reload: true });  }
    }]);
}());
