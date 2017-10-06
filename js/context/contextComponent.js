angular.module('twitterApp').component('contextComponent', {
    templateUrl: 'js/context/contextTemplate.html',
    controller: 'contextController',
    bindings: {
        resolvedContext: '='
    }



})