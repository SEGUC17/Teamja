(function(){
    angular.module('startup')
.controller('MennaController', ['$scope','$rootScope' ,'$state', '$http', function($scope, $rootScope,$state, $http){
$rootScope.Title=""
$scope.promotion = function(){
     $state.go('getpromotion', { reload: true });
     
 
  

        }


$scope.viewreview = function(Title){
$rootScope.Title=Title;
     $state.go('getreview', { reload: true });
     
 
  

        }



$scope.Pay = function(id){
$rootScope.id=id;
     $state.go('offline', { reload: true });
     
 
  

        }


$scope.viewrate = function(Title){
$rootScope.Title=Title;
     $state.go('getrating', { reload: true });
     
 
  

        }

$scope.review = function(Title){
$rootScope.Title=Title;
     $state.go('addreview', { reload: true });
     
 
  

        }

$scope.rate = function(Title){
$rootScope.Title=Title;
     $state.go('addrating', { reload: true });
     
 
  

        }



$scope.Search = function(){
     $state.go('searchng', { reload: true });
     
 
  

        }



 $http.post('/workview').success(function(response){
               


        $scope.works=response;

                
            
            }).error(function(error){
                console.log(error);
            })



$scope.Compare = function(){
     $state.go('compare', { reload: true });
     
 
  

        }



$scope.CustomerUser = function(){
     $state.go('userhome', { reload: true });
     
 
  

        }


 $scope.CompanyUser = function(){
      $state.go('home', { reload: true });
        
        }



   }]);
}());