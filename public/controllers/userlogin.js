(function(){
    angular.module('startup')
.controller('logincontroller', ['$scope','$rootScope', '$state', '$http', function($scope,$rootScope, $state, $http){
       $rootScope.name="";
        $scope.Login = function(Username){
         $rootScope.name=Username;
            $http.post('/userlogin', $scope.newUser).success(function(response){

$state.go('userprofile', { reload: true });
           

            }).error(function(error){
                console.log(error);
            })
       

        }
    }]);
}());
