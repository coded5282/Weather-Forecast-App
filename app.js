// MODULE
var weatherSite = angular.module('weatherSite', ['ngRoute', 'ngResource']); 

// ROUTES
weatherSite.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    
});

// CONTROLLERS 
weatherSite.controller('homeController', ['$scope', function($scope) {
    
}]);

weatherSite.controller('forecastController', ['$scope', function($scope) {
    
}]);