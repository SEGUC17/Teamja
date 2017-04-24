(function(){
    angular.module('startup')
.controller('SearchController', ['$scope', '$state', '$http', function($scope, $state, $http){
        
        $scope.searchng = function(searchelement){
 
            $http.post('/searchng', searchelement).success(function(response){
      
            
            }).error(function(error){
                console.log(error);
            });
            $state.go('searchng', { reload: true });
        };
    }]);
}());