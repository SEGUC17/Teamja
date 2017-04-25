

(function(){
    angular.module('startup')
.controller('AppCtrl', ['$scope','$rootScope', '$state', '$http', function($scope,$rootScope, $state, $http){
        
        $scope.dotheupdate = function(){

            $http.post('/update/' + $rootScope.id, $scope.update).success(function(response){

               $scope.update=response;
                              $state.go('profile', { reload: true });
            
            }).error(function(error){
                console.log(error);
            })
        $state.go('profile', { reload: true });  }
    }]);
}());
