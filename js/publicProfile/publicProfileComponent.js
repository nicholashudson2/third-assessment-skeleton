angular.module('twitterApp').component('publicProfileComponent', {
    templateUrl: './js/publicProfile/publicProfileTemplate.html',
    controller: 'publicProfileController',
    bindings: {
        resolvedUser: '=',
        resolvedIsBeingFollowed: '='
    }

    //TODO: Binding
})