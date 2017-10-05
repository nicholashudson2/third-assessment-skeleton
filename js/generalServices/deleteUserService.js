angular.module('twitterApp').service('deleteUserService', ['$http', '$state', function ($http, $state) {

    this.delete = () => {
        console.log('about to start delete call ')
        let credentials = {
            password: sessionStorage.getItem('password'),
            userLogin: sessionStorage.getItem('userLogin')
        }


        let urlString = 'http://localhost:8090/users/delete/@' + sessionStorage.getItem('userLogin')    


        let result = $http.post(urlString, credentials)
        console.dir(credentials)
        console.log('urlString ' + urlString)
        console.dir(result)
        $state.go('signIn')
    }
    
}])