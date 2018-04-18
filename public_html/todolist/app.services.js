// NOTA: nuova dipendenza
var appsServices = angular.module('todoApp.services', [])

appsServices.service('TodoService', function () {
        this.todos = []
    });