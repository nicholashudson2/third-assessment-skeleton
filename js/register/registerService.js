angular.module('twitterApp').service('registerService',['$http', function($http){
    
    this.registerNewUser = () => {
        console.log(this.user)
        sessionStorage.setItem('userLogin',this.user.credentials.userLogin);
        sessionStorage.setItem('password',this.user.credentials.password);
        return $http.post('http://localhost:8090/users', this.user);
    }
}])