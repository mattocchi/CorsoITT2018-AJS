app.controller('NuovoController', ['$scope', 'TodoService', function ($scope, todoService) {
    $scope.nuovoTodo = {
        descrizione: '',
        completato: false
    }

    $scope.addTodo = function () {
        // come accedo al Controller di Elenco??
        var nuovo = angular.extend({}, $scope.nuovoTodo);
        todoService.todos.push(nuovo);
        $scope.nuovoTodo.descrizione = '';
        console.log(todoService.todos)
    }

}]);