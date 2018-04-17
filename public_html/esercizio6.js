
var app = angular.module('miaApp', [])

/**
 * 
 */
app.controller('mioController', ['$scope', '$filter', 
    function ($scope, $filter) {
        $scope.persona = {
            nome : "Mario"
        }
        $scope.now = new Date()
        // cosa succede se uso un filtro non esistente?
        // NOTA: invoco filtro ()
        $scope.data = $filter('date')($scope.now, 'dd/MM/yyyy');
    }
]);
