// SERVICES
weatherSite.service('locationService', function() { // service to bind city between pages 
    
    this.city = "New York, NY"; 
    
});

weatherSite.service('weatherService', ['$resource', function($resource) {
    
    this.GetWeather = function(city, days) {    
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=7943d885a13d3ec6897530fc86829e63", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

        return weatherResult = weatherAPI.get({ q: city, cnt: days });         
    }; 
    
}]); 