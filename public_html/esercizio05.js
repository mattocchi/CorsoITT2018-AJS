
var app = angular.module('miaApp', [])

app.controller('ParentController', function ($scope) {
    $scope.persona = { salutata: true };
});
app.controller('ChildController', function ($scope) {
    $scope.salutaPersona = function () {
        $scope.persona.nome = "Mario Rossi";
    }
});