angular.module('twitterApp').component('followersComponent', {
    templateUrl: 'js/followers/followersTemplate.html',
    controller: 'followersController',
    bindings: {
        resolvedFollowers: '='
    }

})