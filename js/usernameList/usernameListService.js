angular.module('twitterApp').service('usernameListService', function(){

    this.getUsers = () => {
        return $http.get('http://localhost:8090/users')
    }
    
})