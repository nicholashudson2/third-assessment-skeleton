angular.module('twitterApp').service('signInService', ['$http', function($http){

    this.authenticateUser = () => {

        return $http.post('http://localhost:8090/users/signIn', this.credentials).then((result) => {
            console.log(result.data)
           // return result.data?'resolvedTweetFeed({username:'+ this.credentials.userLogin+'})':'signIn';
           if(result.data){
               sessionStorage.setItem('userLogin', this.credentials.userLogin);
               sessionStorage.setItem('password', this.credentials.password);
           }
           return result.data?'myTweets':'signIn';
        });

    }
}])