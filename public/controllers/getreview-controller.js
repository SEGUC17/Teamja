(function(){
    angular.module('startup')
.controller('GetreviewController', ['$scope', '$state', '$http', function($scope, $state, $http){
        
        $scope.getreview = function($scope, $http){
        	
 
            $http.post('/getreview').success(function(response){
            $scope.review = response;	
      
            
            }).error(function(error){
                console.log(error);
            });
            $state.go('getreview', { reload: true });
        };
    }]);
}());