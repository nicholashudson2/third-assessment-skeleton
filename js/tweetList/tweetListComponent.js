angular.module('twitterApp').component('tweetListComponent', {
    templateUrl: './js/tweetList/tweetListTemplate.html',
    controller: 'tweetListController',
    bindings: {
        resolvedTweetsList: '='
    }

})