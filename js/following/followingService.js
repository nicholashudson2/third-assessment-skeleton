angular.module('twitterApp').service('followingService', ['$http', 'tweetService', function($http, tweetService){
    
    this.tweetService = tweetService



}])