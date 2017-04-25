(function(){
    angular.module('startup')
.controller('GetreviewController',['$scope', '$rootScope','$state', '$http', function($scope, $rootScope,$state, $http){
        

        
            $http.post('/getreview/'+$rootScope.Title).success(function(response){
            $scope.res =response;	
      
            
            }).error(function(error){
                console.log(error);
            });
           
     
    }]);
}());