angular.module('twitterApp').service('signInService', ['$http', function($http){

    this.authenticateUser = () => {
        return $http.post('http://localhost8090/users/sighnIn', this.user)
    }
}])