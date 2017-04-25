(function(){
    angular.module('startup')
.controller('usersignupcontroller', ['$scope','$rootScope','$state', '$http', function($scope,$rootScope, $state, $http){
          $rootScope.name="";
        $scope.createUser = function(Username){
         $rootScope.name=Username;
      
            $http.post('/usersignup', $scope.newUser).success(function(response){
                $state.go('userprofile', { reload: true });
            
            }).error(function(error){
                console.log(error);
            })
        }
    }]);
}());

