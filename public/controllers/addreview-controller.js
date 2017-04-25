(function(){
    angular.module('startup')
.controller('AddreviewController', ['$scope','$rootScope', '$state', '$http', function($scope,$rootScope, $state, $http){
        
        $scope.addreview = function(review){
 
            $http.post('/review/'+$rootScope.Title, review).success(function(response){
      
            
            }).error(function(error){
                console.log(error);
            });
            $state.go('addreview', { reload: true });
        };
    }]);
}());