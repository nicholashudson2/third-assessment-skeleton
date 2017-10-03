angular.module('twitterApp').component('tweetComponent', {
    templateUrl: "/js/tweet/tweetTemplate.html",
    controller: 'tweetController',
    bindings: {
        tweet: '='
    }
})