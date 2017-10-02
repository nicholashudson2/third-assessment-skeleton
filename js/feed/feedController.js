angular.module('twitterApp').controller('feedController', [function(){
    
    this.tweetFeed = resolvedTweetFeed.data

    this.getFeed = () => {
        return feedService.getFeed()
    }

}])