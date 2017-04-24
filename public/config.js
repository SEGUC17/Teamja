
(function(){
    angular.module('startup', ['ui.router'])
            .config(function($stateProvider, $urlRouterProvider){
            
            $urlRouterProvider.otherwise('/');
        
            $stateProvider
            
        




.state('addpromotion', {
                url: "/addpromotion",
                templateUrl: "views/addpromotion.html",
                controller: "AddpromotionController"
            })
.state('addreview', {
                url: "/addreview",
                templateUrl: "views/addratingreview.html",
                controller: "AddreviewController"
            })
.state('addrating', {
                url: "/addrating",
                templateUrl: "views/addratingreview.html",
                controller: "AddratingController"
            })









                })
}());