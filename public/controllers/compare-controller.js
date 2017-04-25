(function(){
    angular.module('startup')
.controller('CompareController', ['$scope', '$state', '$http', function($scope, $state, $http){
  
$http.post('/CompareByPriceAssc').success(function(response){
                      $scope.posts=response;

                
            
            }).error(function(error){
                console.log(error);
            })

  $scope.sortAscending = function(){
  	console.log("sorting Asc");
  	$http.post('/CompareByPriceAssc').success(function(response){
  		$scope.posts= response;
  	})
  }

 $scope.sortDescending = function(){
 	console.log("sorting Desc");
  	$http.post('/CompareByPriceDesc').success(function(response){
  		$scope.posts= response;
  	});

}
       
    }]);
}());