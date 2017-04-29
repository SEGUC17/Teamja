


(function(){
    angular.module('startup')
.controller('ProfileController', ['$scope', '$state', '$rootScope','$http', function($scope, $state,$rootScope, $http){
  
$scope.Username=$rootScope.User;

    

            $http.post('/profile/'+$rootScope.User).success(function(response){
                
                $scope.profile=response;

                   })




        $scope.Change= function(){
         
  
$state.go('change', { reload: true });
           }




        $scope.search= function(){
         
  
$state.go('work-search', { reload: true });
           }



  
        $scope.addPromotion = function(){
         
  
$state.go('addpromotion', { reload: true });
           }


        $scope.addWork = function(){
         
    
            	
$state.go('addwork', { reload: true });
           

       

        }




 $scope.Home = function(){
         
    
              
$state.go('loghome', { reload: true });
           

       

        }
        

$scope.ViewWork = function(){
         
    
 
   $state.go('viewwork', { reload: true });
       

       }
       $scope.Logout=function(){

$rootScope.User="";
  $state.go('menna', { reload: true });


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