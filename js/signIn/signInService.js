angular.module('twitterApp').service('signInService', ['$http', function($http){


    this.myStyle = {display: 'none'}

    this.authenticateUser = () => {
        if(!this.credentials || !this.credentials.userLogin || !this.credentials.password){
            alert('Forgot something!');
            return 'signIn';
        }

        return $http.post('http://localhost:8090/users/signIn', this.credentials).then((result) => {
           if(result.data){
               sessionStorage.setItem('userLogin', this.credentials.userLogin);
               sessionStorage.setItem('password', this.credentials.password);
               return 'main.allTweets';
           }else{
                this.myStyle = {display: 'block', opacity: 0.5, "margin-bottom": '8%'}
            return 'signIn';
           }
           
        });

    }

    this.clearSessionStorage = () => {
        sessionStorage.clear();
    }

    
}])