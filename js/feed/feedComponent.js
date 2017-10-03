angular.module('twitterApp').component('feedComponent', {
    templateUrl: './js/feed/feedTemplate.html',
    controller: 'feedController',
    bindings: {
        resolvedTweetFeed: '='
        // resolvedFollowers: '=',
        // resolvedFollowing: '='
    }



})