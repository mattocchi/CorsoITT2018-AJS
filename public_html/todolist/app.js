var app = angular.module("todoApp", ["ngRoute", "todoAppServices"])

app.directive("menu", function () {
    return {
        restrict: 'E',
        templateUrl: 'components/menu.html'
    }
})

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "components/main.html"
        })
        .when("/add", {
            templateUrl: "components/nuovo.html"
        })
        .when("/about", {
            templateUrl: "components/about.html"
        })
})

app.controller("MainController", ["$scope","TodoService",function ($scope, todoService) {
    /*
        $scope.todoDaFare = [
        {descrizione: 'aaa'}, 
        {descrizione: 'bbb'}, 
        {descrizione: 'ccc'}
    ]
    */
   $scope.todoDaFare = todoService.todos;
}])

app.controller("NuovoController", ["$scope","TodoService",function ($scope, todoService) {
    $scope.nuovoTodo = { descrizione: "" } 
    $scope.aggiungiTodo = function () {
        // clonazione di $scope.nuovoTodo
        var nuovo = angular.extend({}, $scope.nuovoTodo);
        todoService.todos.push(nuovo)
        $scope.nuovoTodo.descrizione = ''
    }
}])

