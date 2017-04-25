(function(){
    angular.module('startup')
.controller('AddworkController', ['$scope', '$rootScope','$state', '$http', function($scope, $rootScope,$state, $http){
        
        $scope.addwork = function(){
         
            $http.post('/work/'+$rootScope.User, $scope.work).success(function(response){
            	$state.go('viewwork', { reload: true });
           
      
     $scope.work=response;
            }).error(function(error){
                console.log(error);
            })
        }
        
    }]);
}());