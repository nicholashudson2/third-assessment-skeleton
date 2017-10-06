angular.module('twitterApp').service('deleteUserService', ['$http', '$state', function ($http, $state) {

    this.delete = () => {
        let credentials = {
            password: sessionStorage.getItem('password'),
            userLogin: sessionStorage.getItem('userLogin')
        }

        let urlString = 'http://localhost:8090/users/delete/@' + sessionStorage.getItem('userLogin')    

        let result = $http.post(urlString, credentials)
        $state.go('signIn')
    }
    
}])