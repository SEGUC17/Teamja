(function(){
    angular.module('startup')
.controller('userprofile', ['$scope','$rootScope', '$state', '$http', function($scope,$rootScope, $state, $http){
  
  $scope.user=$rootScope.name;
        
    }]);
}());
