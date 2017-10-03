angular.module('twitterApp').controller('tweetListController', ['tweetService', function(tweetService){
    
    this.tweetList = this.resolvedTweetsList.data;
    //this.tweetService = tweetService
}])