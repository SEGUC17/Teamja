(function(){
    angular.module('startup')
.controller('AddreviewController', ['$scope', '$state', '$http', function($scope, $state, $http){
        
        $scope.addreview = function(review){
 
            $http.post('/review', review).success(function(response){
      
            
            }).error(function(error){
                console.log(error);
            });
            $state.go('addreview', { reload: true });
        };
    }]);
}());