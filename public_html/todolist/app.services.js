var appServices = angular.module("todoAppServices", [])

appServices.service("TodoService", function() {
    this.todos = []
})