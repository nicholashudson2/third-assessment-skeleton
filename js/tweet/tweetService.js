angular.module('twitterApp').service('tweetService', ['$http', function (http) {

    this.getAllTweets = () => {
        return http.get('http://localhost:8090/api/tweets')
    }

    this.createNewTweet = (newTweet) => {
        return http.post('http://localhost:8090/api/tweets', newTweet)
    }

}])