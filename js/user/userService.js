angular.module('twitterApp').service('userService', function(){

    this.currentUser = resolvedCurrentUser.data

    this.getUsers = () => {
        return $http.get('http://localhost:8090/users')
    }
    
})