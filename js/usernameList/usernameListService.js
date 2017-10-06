angular.module('twitterApp').service('usernameListService', ['$http', function($http){

    this.getAllUsers = () => {
        return $http.get('http://localhost:8090/users')
    }

    this.getFollowers = (username) => {
        if(username===''){
            username=sessionStorage.getItem('userLogin')
        }
        return $http.get('http://localhost:8090/users/@'+username+'/followers');
    }

    this.getFollowing = (username) => {
        if(username===''){
            username=sessionStorage.getItem('userLogin')
        }
        return $http.get('http://localhost:8090/users/@'+username+'/following')
      
    }
    
}])