angular.module('twitterApp').component('profileComponent', {
    templateUrl: './js/profile/profileTemplate.html',
    controller: 'profileController',
    bindings: {
        resolvedUser: '='
    }

    //TODO: Binding
})