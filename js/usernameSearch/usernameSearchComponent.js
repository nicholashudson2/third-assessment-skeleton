angular.module('twitterApp').component('usernameSearchComponent', {
    templateUrl: 'js/usernameSearch/usernameSearchTemplate.html',
    controller: 'usernameSearchController',
    bindings: {
        resolvedUser: '='
    }
})