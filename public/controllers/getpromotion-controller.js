
(function(){
    angular.module('startup')
.controller('GetpromotionController', ['$scope', '$state', '$http', function($scope, $state, $http){

           $http.post('/getpromotion').success(function(response){
            $scope.promotions = response;	
      
            
            }).error(function(error){
                console.log(error);
})
        
        
    }]);
}());