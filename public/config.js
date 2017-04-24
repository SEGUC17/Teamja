(function(){
    angular.module('startup', ['ui.router'])
            .config(function($stateProvider, $urlRouterProvider){
            
            $urlRouterProvider.otherwise('/');
        
            $stateProvider

                .state('searchng', {
                url: "/",
                templateUrl: "views/search.html",
                controller: "SearchController"
            })


                })
}());