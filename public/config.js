
(function(){
    angular.module('startup', ['ui.router'])
            .config(function($stateProvider, $urlRouterProvider){
            
            $urlRouterProvider.otherwise('/');
        
            $stateProvider
            
        





.state('getpromotion', {
                url: "/getpromotion",
                templateUrl: "views/getpromotion.html",
                controller: "GetpromotionController"
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








                })
}());