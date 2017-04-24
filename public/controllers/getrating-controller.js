(function(){
    angular.module('startup')
.controller('GetratingController', ['$scope', '$state', '$http', function($scope, $state, $http){
        
        $scope.getrating = function($scope, $http){
        	
 
            $http.post('/getrating').success(function(response){
            $scope.rating = response;	
      
            
            }).error(function(error){
                console.log(error);
            });
            $state.go('getrating', { reload: true });
        };
    }]);
}());