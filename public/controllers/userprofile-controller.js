(function(){
    angular.module('startup')
.controller('userprofile', ['$scope','$rootScope', '$state', '$http', function($scope,$rootScope, $state, $http){
  
  $scope.user=$rootScope.name;


 $scope.Home = function(){
         
    
            	
$state.go('menna', { reload: true });
           

       

        }


 $scope.book= function(){
         
    
            	
$state.go('Payview', { reload: true });
           

       

        }

 $scope.Viewbook= function(){
         
    
            	
$state.go('MyBookings', { reload: true });
           

       

        }


        
    }]);
}());
