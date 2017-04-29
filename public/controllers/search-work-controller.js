(function(){
    angular.module('startup')
.controller('SearchWork', ['$scope','$rootScope', '$state', '$http', function($scope, $rootScope,$state, $http){
  
        $scope.searchng = function(){

            $http.post('/swork/'+$rootScope.User, $scope.x).success(function(response){
      
            $scope.work=response;
            }).error(function(error){
                console.log(error);
            });
         
        };





$scope.Home = function(){
     $state.go('profile', { reload: true });

            
        }

            


$scope.update = function(id){
    //console.log(id);

    $rootScope.id=id;
          $state.go('updating', { reload: true });

        }


 $scope.delete = function(id){
        console.log(id);
$rootScope.deleteid=id;
            $http.post('/delete/' + $rootScope.deleteid, $scope.work).success(function(response){
                $state.go($state.current, {}, {reload: true});
               
            }).error(function(error){
                console.log(error);


            })
             $state.go($state.current, {}, {reload: true});
        }
















    }]);
}());