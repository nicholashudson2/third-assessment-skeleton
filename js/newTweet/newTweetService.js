angular.module('twitterApp').service('newTweetService', ['$http',function($http){
    
    this.postNewTweet = () => {
        this.newTweet.credentials = {userLogin: sessionStorage.getItem('userLogin'), password: sessionStorage.getItem('password')};
        console.log(this.newTweet.credentials);
        
        return $http.post('http://localhost:8090/tweets', this.newTweet);
    }
}])