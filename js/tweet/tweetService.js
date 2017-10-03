angular.module('twitterApp').service('tweetService', ['$http', function (http) {

    this.getAllTweets = () => {
        return http.get('http://localhost:8090/api/tweets')
    }

    this.createNewTweet = (newTweet) => {
        return http.post('http://localhost:8090/api/tweets', newTweet)
    }

    this.NumberOfLikes = (id) => {
        let clientDtos = http.get('tweets/{id}/likes')
        return clientDtos.length
    }

    this.like = (id) => {
        let credentials = {
            password: sessionStorage.getItem('password'),
            userLogin: sessionStorage.getItem('userLogin')
        }
        http.post('tweets/{id}/like', credentials)
    }

    this.followers = resolvedFollowers.data
    this.getFollowers = (userName) => {
        return $http.get('users/@{' + userName + '}/followers')
    }

    this.following = resolvedFollowing.data
    this.getFollowing = (userName) => {
        return $http.get('users/@{' + userName + '}/following')
    }

}])