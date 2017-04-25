
(function(){
    angular.module('startup', ['ui.router'])
            .config(function($stateProvider, $urlRouterProvider){
            
            $urlRouterProvider.otherwise('/');
          $stateProvider


.state('loghome', {
                url: "/loghome",
                templateUrl: "views/loggedinhome.html",
                controller: "PayController"
            })


.state('Payview', {
                url: "/paybook",
                templateUrl: "views/book-pay.html",
                controller: "PayController"
            })



.state('addreview', {
                url: "/addreview",
                templateUrl: "views/addratingreview.html",
                controller: "AddreviewController"
            })
.state('booking', {
                url: "/booking",
                templateUrl: "views/booking.html",
                controller: "BookingController"
            })

.state('addrating', {
                url: "/addrating",
                templateUrl: "views/addratingreview.html",
                controller: "AddratingController"
            })

.state('getreview', {
                url: "/getreview",
                templateUrl: "views/getreview.html",
                controller: "GetreviewController"
            })
.state('getrating', {
                url: "/getrating",
                templateUrl: "views/getrating.html",
                controller: "GetratingController"
            })
        
          
                .state('signUp', {
                url: "/signup",
                templateUrl: "views/signup-view.html",
                controller: "SignupController"
            })

.state('getpromotion', {
                url: "/getpromotion",
                templateUrl: "views/getpromotion.html",
                controller: "GetpromotionController"
            })

.state('menna', {
                url: "/",
                templateUrl: "views/menna.html",
                controller: "MennaController"
            })


.state('profile', {
                url: "/pro",
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



.state('home', {
                url: "/home",
                templateUrl: "views/home.html",
                controller: "HomeController"
            })


.state('updating', {
                url: "/update",
                templateUrl: "views/firstview.html",
                controller: "AppCtrl"
            })





            $stateProvider
                .state('usersignup', {
                url: "/p",
                templateUrl: "views/usersignupview.html",
                controller: "usersignupcontroller"
            })


.state('userhome', {
                url: "/user",
                templateUrl: "views/userloginview.html",
                controller: "logincontroller"
            })

.state('userprofile', {
                url: "/profile",
                templateUrl: "views/Userprofile.html",
                controller: "userprofile"
            })




.state('addpromotion', {
                url: "/add",
                templateUrl: "views/addpromotion.html",
                controller: "AddpromotionController"
            })






.state('compare', {
                url: "/koko",
                templateUrl: "views/compare.html",
                controller: "CompareController"
            })






                .state('searchng', {
                url: "/search",
                templateUrl: "views/search.html",
                controller: "SearchController"
            })






                })
}());