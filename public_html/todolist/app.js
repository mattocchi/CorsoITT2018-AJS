// NOTA: nuova dipendenza
var app = angular.module('todoApp', ["ngRoute", "todoApp.services"])

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "main/main.html"
        })
        .when("/add", {
            templateUrl: "nuovo/nuovo.html"
        })
        .when("/about", {
            templateUrl: "about/about.html"
        });
});