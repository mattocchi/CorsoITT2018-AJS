// NOTA: nuova dipendenza
var appsServices = angular.module('todoApp.services', [])

appsServices.service('TodoService', ['$http', function () {
        this.todos = []

        // http://ufficio.aleven.it:3000/todos
        // this.caricaDati = function () {
        //     return $http.get('http://ufficio.aleven.it:3000/todos');
        // }
    }]);