app.controller('MainController', ['$scope', 'TodoService', function ($scope, todoService) {
    // $scope.todos = [
    //     { descrizione: 'aaa' },
    //     { descrizione: 'bbb' },
    //     { descrizione: 'ccc' }
    // ]

    $scope.todos = todoService.todos;
}]);