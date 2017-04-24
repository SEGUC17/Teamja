/*(function(){
    angular.module('startup')
.controller('ProfileController', ['$scope', '$state', '$http', function($scope, $state, $http){
  
        $scope.addWork = function(){

         $state.go('addwork', { reload: true });
       

        }
    }]);
}());
*/


(function(){
    angular.module('startup')
.controller('ProfileController', ['$scope', '$state', '$rootScope','$http', function($scope, $state,$rootScope, $http){
  
$scope.Username=$rootScope.User;

    

            $http.post('/profile/'+$rootScope.User).success(function(response){
                
                $scope.profile=response;

                   })






        $scope.addWork = function(){
         
    
            	
$state.go('addwork', { reload: true });
           

       

        }

$scope.ViewWork = function(){
         
    
 
   $state.go('viewwork', { reload: true });
       

       }
       $scope.Logout=function(){

$rootScope.User="";
  $state.go('home', { reload: true });


}


    }]);
}());
/*
(function(){
    angular.module('startup')
.controller('ProfileController', ['$scope', '$state', '$http', function($scope, $state, $http){
        
        $scope.addwork = function(){
         
        $state.go('addwork', { reload: true });
           

        }


         $scope.ViewWork= function(){

$http.post('/workview').success(function(response)




    )


        }


    }]);
}());
*/