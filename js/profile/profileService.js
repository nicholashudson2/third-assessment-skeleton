angular.module('twitterApp').service( 'profileService', ['$http', function($http){
    
    this.updateProfile = () => {
        this.user.credentials = {userLogin: sessionStorage.getItem('userLogin'), password: sessionStorage.getItem('paswword')};
        $http.patch('http://localhost:8090/users/@'+sessionStorage.getItem('userLogin'), this.user);
    }

}])