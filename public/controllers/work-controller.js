
 (function(){
    angular.module('startup')
.controller('ViewController', ['$scope','$rootScope' ,'$state', '$http', function($scope, $rootScope,$state, $http){


 
$rootScope.id="";

 $http.post('/workview/'+$rootScope.User).success(function(response){
               


        $scope.works=response;

                
            
            }).error(function(error){
                console.log(error);
            })


$scope.update = function(id){
    //console.log(id);



        }


 $scope.delete = function(id){
        console.log(id);

        
        }

$scope.Home = function(){
     $state.go('profile', { reload: true });

            
        }

   }]);
}());