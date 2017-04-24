(function(){
    angular.module('startup')
.controller('HomeController', ['$scope','$rootScope', '$state', '$http', function($scope, $rootScope, $state, $http){
      $rootScope.User="";
       


        $scope.Login = function(Username){
             $rootScope.User= Username;

            $http.post('/login', $scope.newUser).success(function(response){

$state.go('profile', { reload: true });
           

            }).error(function(error){
                console.log(error);
            })
       

        }
    }]);
}());