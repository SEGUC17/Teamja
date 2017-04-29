(function(){
    angular.module('startup')
.controller('MyBooking', ['$scope','$rootScope' ,'$state', '$http', function($scope, $rootScope,$state, $http){




 $http.post('/Mybooking/'+$rootScope.User).success(function(response){
               


        $scope.books=response;

                
            
            }).error(function(error){
                console.log(error);
            })
            




   






   }]);
}());