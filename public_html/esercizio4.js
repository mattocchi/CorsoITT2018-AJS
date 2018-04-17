
var app = angular.module('miaApp', [])

app.controller('PrimoController', function ($scope) {
    $scope.contatore = 0;
    $scope.aggiungi = function (quantita) {
        $scope.contatore += quantita;
    };
    $scope.sottrai = function (quantita) {
        $scope.contatore -= quantita;
    };
});