(function(){
    angular.module('startup')
.controller('SignupController', ['$scope','$rootScope','$state', '$http', function($scope,$rootScope, $state, $http){
          $rootScope.User="";

        $scope.createUser = function(Username){
         $rootScope.User=Username;

            $http.post('/signup', $scope.newUser).success(function(response){
            	
                $state.go('profile', { reload: true });
            
            }).error(function(error){
                console.log(error);
            })
        }
    }]);
}());