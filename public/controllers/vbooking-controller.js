(function(){
    angular.module('startup')
.controller('ViewBooking', ['$scope','$rootScope' ,'$state', '$http', function($scope, $rootScope,$state, $http){




 $http.post('/viewbooking/'+$rootScope.id).success(function(response){
               


        $scope.books=response;

                
            
            }).error(function(error){
                console.log(error);
            })
            




   






   }]);
}());