angular.module('twitterApp').service('userService', function(){

    this.getUsers = () => {
        return $http.get('http://localhost:8090/users')
    }
    
})