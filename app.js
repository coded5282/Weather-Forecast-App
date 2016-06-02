// MODULE
var weatherSite = angular.module('weatherSite', ['ngRoute', 'ngResource']); // Setting up module for app

// ROUTES
weatherSite.config(function ($routeProvider) { // Using route provider to access the pages 
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    
    .when('/forecast/:days', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController' 
    })
    
});

// SERVICES
weatherSite.service('locationService', function() { // service to bind city between pages 
    
    this.city = "New York, NY"; 
    
});

// CONTROLLERS 
weatherSite.controller('homeController', ['$scope', 'locationService', function($scope, locationService) { // controller to check for changes in city on homepage 
    
    $scope.city = locationService.city; 
    
    $scope.$watch('city', function() {
       locationService.city = $scope.city;         
    });
    
        
}]);

weatherSite.controller('forecastController', ['$scope', '$resource', '$routeParams', 'locationService', function($scope, $resource, $routeParams, locationService) { // weather controller
    
    $scope.city = locationService.city;
    
    $scope.days = $routeParams.days || 2; 
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=7943d885a13d3ec6897530fc86829e63", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days }); 
    
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32); 
        
    }; 
    
    $scope.convertToDate = function(dt) {
        
        return new Date(dt * 1000); 
        
    }; 
    
}]);