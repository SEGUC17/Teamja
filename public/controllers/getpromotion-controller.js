
(function(){
    angular.module('startup')
.controller('GetpromotionController', ['$scope', '$state', '$http', function($scope, $state, $http){
        
        $scope.getpromotion = function($scope, $http){
        	
 
            $http.post('/getpromotion').success(function(response){
            $scope.promotion = response;	
      
            
            }).error(function(error){
                console.log(error);
            });
            $state.go('getpromotion', { reload: true });
        };
    }]);
}());