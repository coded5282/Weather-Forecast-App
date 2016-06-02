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

// SERVICES
weatherSite.service('locationService', function() {
    
    this.city = "New York, NY"; 
    
});

// CONTROLLERS 
weatherSite.controller('homeController', ['$scope', 'locationService', function($scope, locationService) {
    
    $scope.city = locationService.city; 
    
    $scope.$watch('city', function() {
       locationService.city = $scope.city;         
    });
    
    
    
    
}]);

weatherSite.controller('forecastController', ['$scope', 'locationService', function($scope, locationService) {
    
    $scope.city = locationService.city; 
    
}]);