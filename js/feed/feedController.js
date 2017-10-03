angular.module('twitterApp').controller('feedController', ['tweetService', function(tweetService){
    
    this.tweetFeed = resolvedTweetFeed.data

    this.tweetService = tweetService

    this.getFeed = () => {
        return feedService.getFeed()
    }

}])