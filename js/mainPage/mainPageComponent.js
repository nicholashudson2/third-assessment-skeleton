angular.module('twitterApp').component('mainPageComponent', {
    templateUrl: 'js/mainPage/mainPageTemplate.html',
    controller: 'mainPageController',

    bindings: {
        resolvedFollowing: '=',
        resolvedFollowers: '='
    }
})