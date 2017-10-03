angular.module('twitterApp').service('signInService', ['$http', function($http){

    this.authenticateUser = () => {
        // return $http.post('http://localhost:8090/api/users/signIn', this.user)
        console.log(this.user)
        let authenticated = $http.post('http://localhost:8090/api//users/signIn', this.user).data
        if (authenticated) {
            sessionStorage.setItem('userLogin', this.user.userLogin)
            sessionStorage.setItem('password', this.user.password)
        }
        return authenticated
    }
}])