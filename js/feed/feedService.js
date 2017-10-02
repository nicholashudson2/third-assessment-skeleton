angular.module('twitterApp').service('feedService', ['$http', function($http){

    this.feed = this.resolvedTweetFeed.data;

    this.getFeed = (username) => {
        return $http.get('users/@' + username + '/feed')
    }



    
}])