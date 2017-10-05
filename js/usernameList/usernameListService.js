angular.module('twitterApp').service('usernameListService', ['$http', function($http){

    this.getAllUsers = () => {
        return $http.get('http://localhost:8090/users')
    }

    this.getFollowers = () => {
        return $http.get('http://localhost:8090/users/@'+sessionStorage.getItem('userLogin')+'/followers');
    }

    this.getFollowing = () => {
        return $http.get('http://localhost:8090/users/@'+sessionStorage.getItem('userLogin')+'/following')
      
    }
    
}])