// CONTROLLERS 
weatherSite.controller('homeController', ['$scope', '$location', 'locationService', function($scope, $location, locationService) { // controller to check for changes in city on homepage 
    
    $scope.city = locationService.city; 
    
    $scope.$watch('city', function() {
       locationService.city = $scope.city;         
    });
    
    $scope.submit = function() {
        $location.path("/forecast");
    };
    
        
}]);

weatherSite.controller('forecastController', ['$scope', '$routeParams', 'locationService', 'weatherService', function($scope, $routeParams, locationService, weatherService) { // weather controller
    
    $scope.city = locationService.city;
    
    $scope.days = $routeParams.days || '2'; 
    
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days); 
    
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32); 
        
    }; 
    
    $scope.convertToDate = function(dt) {
        
        return new Date(dt * 1000); 
        
    }; 
    
}]);