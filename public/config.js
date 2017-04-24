
(function(){
    angular.module('startup', ['ui.router'])
            .config(function($stateProvider, $urlRouterProvider){
            
            $urlRouterProvider.otherwise('/');
        
            $stateProvider
                .state('usersignup', {
                url: "/signup",
                templateUrl: "views/usersignupview.html",
                controller: "usersignupcontroller"
            })


.state('userhome', {
                url: "/",
                templateUrl: "views/userloginview.html",
                controller: "logincontroller"
            })

.state('userprofile', {
                url: "/profile",
                templateUrl: "views/Userprofile.html",
                controller: "userprofile"
            })


                })
}());