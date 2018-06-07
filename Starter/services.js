// Services
weatherApp.service('cityService', function () {
  this.city = "New York";
});

weatherApp.service('weatherService', ['$resource', function ($resource) {
  this.getWeather = function (city, days) {
    var weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });
    return weatherAPI.get({ q: city, cnt: days, appid: 'd8fb42036b75fa0db58195e6863fa6fa' });
  }
}]);