
(function(){
    angular.module('startup')
.controller('ProfileController', ['$scope', '$state', '$http', function($scope, $state, $http){
  

        $scope.addPromotion = function(){
         
  
$state.go('addpromotion', { reload: true });
           

       

        }
            


    }]);
}());