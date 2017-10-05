angular.module('twitterApp').service('deleteUserService', ['$http', '$state', function ($http, $state) {

    this.delete = () => {
        let credentials = {
            password: sessionStorage.getItem('password'),
            userLogin: sessionStorage.getItem('userLogin')
        }
        $http.delete('http://localhost:8090/users/@' + sessionStorage.getItem('userLogin'), credentials)
        $state.go('signIn')            
    }

}])