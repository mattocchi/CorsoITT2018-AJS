app.controller('MainController', ['$scope', '$http', 'TodoService', function ($scope, $http, todoService) {
    // $scope.todos = [
    //     { descrizione: 'aaa' },
    //     { descrizione: 'bbb' },
    //     { descrizione: 'ccc' }
    // ]

    $scope.todos = todoService.todos;

    // gestire correttamente caricamento dati
    // $http.get('http://ufficio.aleven.it:3000/todos')
    //     .then(function (response) {
    //         console.log(response);
    //         todoService.todos = response.data;
    //         $scope.todos = todoService.todos;
    //     });
}]);