// CONTROLLERS 
weatherSite.controller('homeController', ['$scope', 'locationService', function($scope, locationService) { // controller to check for changes in city on homepage 
    
    $scope.city = locationService.city; 
    
    $scope.$watch('city', function() {
       locationService.city = $scope.city;         
    });
    
        
}]);

weatherSite.controller('forecastController', ['$scope', '$resource', '$routeParams', 'locationService', function($scope, $resource, $routeParams, locationService) { // weather controller
    
    $scope.city = locationService.city;
    
    $scope.days = $routeParams.days || '2'; 
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=7943d885a13d3ec6897530fc86829e63", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days }); 
    
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32); 
        
    }; 
    
    $scope.convertToDate = function(dt) {
        
        return new Date(dt * 1000); 
        
    }; 
    
}]);