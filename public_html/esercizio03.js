/*
* funzione di Angular per la creazione di un Modulo
*/
angular.module('miaApp', [])
/*
* .controller una funzione del modulo Angular definisce un nuovo controller
* - una string che definisce il nome del controller
* - una funzione che determina il comportamento del controller
*/
.controller('mioController', function($scope, $timeout) {
    $scope.orologio = {};
    var aggiornaOrologio = function() {
        $scope.orologio.ora = new Date();
        $timeout(function() {
            aggiornaOrologio();
        }, 1000);
    };
    aggiornaOrologio();
});