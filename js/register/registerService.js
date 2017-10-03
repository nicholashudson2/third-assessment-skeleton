angular.module('twitterApp').service('registerService',['$http', function($http){
    
    this.registerNewUser = () => {
        console.log(this.user)
        return $http.post('http://localhost:8090/users', this.user);
    }
}])