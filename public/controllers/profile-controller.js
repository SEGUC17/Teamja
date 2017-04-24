
(function(){
    angular.module('startup')
.controller('ProfileController', ['$scope', '$state', '$http', function($scope, $state, $http){
  

      
         $scope.getPromotion = function(){
         
   
                
$state.go('getpromotion', { reload: true });
           

       

        }


    }]);
}());