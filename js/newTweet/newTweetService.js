angular.module('twitterApp').service('newTweetService', ['$http',function($http){
    
    this.postNewTweet = () => {
        this.newTweet.credentials = {userLogin: sessionStorage.getItem('userLogin'), password: sessionStorage.getItem('password')};
        
        return $http.post('http://localhost:8090/tweets', this.newTweet).then((result)=> {
            return $http.get('http://localhost:8090/tweets').then((res)=> {
                console.log('inside')
                console.log(res)
                console.log('inside');
                return res
            });
        });
    }
}])