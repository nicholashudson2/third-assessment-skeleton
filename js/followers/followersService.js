angular.module('twitterApp').service('followersService', ['http', 'tweetService', function($http, tweetService){
    
    this.tweetService = tweetService



}])