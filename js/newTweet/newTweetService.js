angular.module('twitterApp').service('newTweetService', ['$http', '$state', function($http, $state){
    
    this.postNewTweet = () => {
        this.newTweet.credentials = {userLogin: sessionStorage.getItem('userLogin'), password: sessionStorage.getItem('password')};
        $http.post('http://localhost:8090/tweets', this.newTweet).then((done)=> {
            this.newTweet.content = '';
            if($state.is('main.allTweets')){
                $state.reload();
            }else{
                $state.go('main.allTweets');
            }
            
       });
     }
    
}])