(function(){
    angular.module('startup')
.controller('AddratingController', ['$scope', '$state', '$http', function($scope, $state, $http){
        
        $scope.addrating = function(rating){
 
            $http.post('/rating', rating).success(function(response){
      
            
            }).error(function(error){
                console.log(error);
            });
             $state.go('addrating', { reload: true });
        };
    }]);
}());