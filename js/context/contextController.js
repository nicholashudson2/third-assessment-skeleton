angular.module('twitterApp').controller('contextController', ['$http', 'tweetService', 'contextService', function($http, tweetService, contextService){
    
    this.tweetService = tweetService
    
    this.context = resolvedContext.data

    this.tweet = this.context.target
    this.tweets_before = this.context.before
    this.tweets_after = this.context.after




}])