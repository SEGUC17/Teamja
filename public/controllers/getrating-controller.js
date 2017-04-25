(function(){
    angular.module('startup')
.controller('GetratingController',['$scope', '$rootScope','$state', '$http', function($scope, $rootScope,$state, $http){
        

        	
 
            $http.post('/getrating/'+$rootScope.Title).success(function(response){
            $scope.ratings = response;	
      
            
            }).error(function(error){
                console.log(error);
            });
            $state.go('getrating', { reload: true });
   
    }]);
}());