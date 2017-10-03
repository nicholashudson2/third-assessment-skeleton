angular.module('twitterApp').controller('feedController', ['tweetService', function(tweetService){
    

    this.tweetFeed = this.resolvedTweetFeed.data;
    this.tweetService = tweetService



}])