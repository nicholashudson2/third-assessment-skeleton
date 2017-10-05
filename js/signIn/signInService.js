angular.module('twitterApp').service('signInService', ['$http', function($http){

    this.authenticateUser = () => {

        return $http.post('http://localhost:8090/users/signIn', this.credentials).then((result) => {
           if(result.data){
               sessionStorage.setItem('userLogin', this.credentials.userLogin);
               sessionStorage.setItem('password', this.credentials.password);
           }
           return result.data?'main.allTweets':'signIn';
        });

    }

    this.clearSessionStorage = () => {
        sessionStorage.clear();
    }
}])