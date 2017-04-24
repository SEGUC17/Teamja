(function(){
    angular.module('startup', ['ui.router'])
            .config(function($stateProvider, $urlRouterProvider){
            
            $urlRouterProvider.otherwise('/');
        
            $stateProvider
                .state('signUp', {
                url: "/signup",
                templateUrl: "views/signup-view.html",
                controller: "SignupController"
            })



.state('profile', {
                url: "/profile",
                templateUrl: "views/profile.html",
                controller: "ProfileController"
            })


.state('addwork', {
                url: "/addwork",
                templateUrl: "views/addwork.html",
                controller: "AddworkController"
            })



.state('viewwork', {
                url: "/viewwork",
                templateUrl: "views/work-view.html",
             controller: "ViewController"
            })

.state('update', {
                url: "/update",
                templateUrl: "views/firstview.html",
                controller: "AppCtrl"
            })


.state('home', {
                url: "/",
                templateUrl: "views/home.html",
                controller: "HomeController"
            })


.state('compare', {
                url: "/service",
                templateUrl: "views/compare.html",
                controller: "CompareController"
            })


                })
}());