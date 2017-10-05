angular.module('twitterApp').service( 'profileService', ['$http', '$state', function($http, $state){
    this.updateProfile = () => {
        this.user.credentials = {userLogin: sessionStorage.getItem('userLogin'), password: sessionStorage.getItem('password')};
        $http.patch('http://localhost:8090/users', this.user).then((result) => {
            $state.reload();
        });
    }
}])