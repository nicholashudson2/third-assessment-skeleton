angular.module('twitterApp').component('usernameListComponent', {
    templateUrl: 'js/username/usernameListTemplate.html',
    controller: 'usernameListController',
    bindings: {
        usernameList: '='
    }
})