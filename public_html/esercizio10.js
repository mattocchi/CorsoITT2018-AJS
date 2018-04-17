var app = angular.module('miaApp', [])
.directive('miaDirettiva', function () {
    return {
        restrict: 'A',
        replace: true,
        scope: {
            mioUrl: '@', // binding strategy
            mioTesto: '@' // binding strategy
        },
        template: '<a href="{{mioUrl}}">' + '{{mioTesto}}</a>'
    }
})
