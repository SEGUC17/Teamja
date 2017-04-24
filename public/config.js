
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
.state('compare', {
                url: "/service",
                templateUrl: "views/compare.html",
                controller: "CompareController"
            })


                })
.state('updating', {
                url: "/update",
                templateUrl: "views/firstview.html",
                controller: "AppCtrl"
            })

}());
