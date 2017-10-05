angular.module('twitterApp').controller('newTweetController', ['newTweetService', function(newTweetService){
    this.newTweetService = newTweetService;
}])