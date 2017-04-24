(function(){
    angular.module('startup')
.controller('AddpromotionController', ['$scope', '$state','$rootScope', '$http', function($scope,$rootScope,$state, $http){
        
$rootScope.id="";

        $scope.addpromotion = function(promotion){
        
 
            $http.post('/promotion/'+$rootScope.User, promotion).success(function(response){
      
            
            }).error(function(error){
                console.log(error);
            });
        };
    }]);
}());