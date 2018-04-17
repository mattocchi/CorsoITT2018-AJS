var app = angular.module('miaApp', ["ngRoute", "miaApp.services"])

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pagina1.html",
            controller: "Pagina1Controller"
        })
        .when("/p2", {
            templateUrl: "pagina2.html",
            controller: "Pagina2Controller"
        })
        .when("/p3", {
            templateUrl: "pagina3.html",
            controller: "Pagina3Controller"
        });
});

app.controller('MainController', ["$scope", "mioServizio", function ($scope, mioServizio) {
    $scope.username = '';
    $scope.memorizza = function () {
        mioServizio.usernameApp = $scope.username;
        console.log(mioServizio.usernameApp)
    }
}]);

app.controller('Pagina1Controller', ["$scope", "mioServizio", function ($scope, mioServizio) {
    $scope.intestazione = "Pagina1"
    $scope.usernameLoggato = mioServizio.usernameApp;
}]);

app.controller('Pagina2Controller', ["$scope", "mioServizio", function ($scope, mioServizio) {
    $scope.intestazione = "Pagina2"
    $scope.usernameLoggato = mioServizio.usernameApp;
}]);

app.controller('Pagina3Controller', ["$scope", "mioServizio", function ($scope, mioServizio) {
    $scope.intestazione = "Pagina3"
    $scope.usernameLoggato = mioServizio.usernameApp;
}]);