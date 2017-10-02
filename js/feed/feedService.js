angular.module('twitterApp').service('feedService', ['$http', function($http){

    this.feed = this.resolvedTweetFeed.data;

    this.getFeed = (username) => {
        return $http.get('http://localhost:8090/api/users/@' + username + '/feed')
    }



    
}])