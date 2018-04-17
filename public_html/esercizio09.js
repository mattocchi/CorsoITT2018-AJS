
var app = angular.module('miaApp', [])
.directive('miaDirettiva', function () {
    return {
        restrict: 'E',
        template: '<a href="http://google.com"> Clica qui </a>'
    }
});
