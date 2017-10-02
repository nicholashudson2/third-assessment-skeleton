angular.module('twitterApp').component('tweetComponent', {
    templateUrl: "/js/tweet/tweetTemplate.html",
    controller: "/js/tweet/tweetController",
    bindings: {
        resolvedTweets: '='
    }
    
})