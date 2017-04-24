
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

.state('booking', {
                url: "/booking",
                templateUrl: "views/book.html",
                controller: "BookingCtrl"
            })


.state('home', {
                url: "/",
                templateUrl: "views/home.html",
                controller: "HomeController"
            })



                })
}());
