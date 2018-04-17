
var app = angular.module('miaApp', [])

/**
 * 
 */
app.controller('mioController', ['$scope', '$filter', 
    function ($scope, $filter) {
        $scope.dati = [ 1, 5, 10, 11, 2, 3, 9 ];
    }
]);
