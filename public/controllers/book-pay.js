
 (function(){
    angular.module('startup')
.controller('PayController', ['$scope','$rootScope' ,'$state', '$http', function($scope, $rootScope,$state, $http){


$rootScope.id="";

$rootScope.price="";

 $http.post('/workview').success(function(response){
               


        $scope.works=response;

                
            
            }).error(function(error){
                console.log(error);
            })
            




   





$scope.book = function(id){
    //console.log(id);

    $rootScope.id=id;
          $state.go('booking', { reload: true });

        }


   }]);
}());