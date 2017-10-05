angular.module('twitterApp').service( 'profileService', ['$http', '$state', function($http, $state){
    this.updateProfile = () => {
        this.user.credentials = {userLogin: sessionStorage.getItem('userLogin'), password: sessionStorage.getItem('paswword')};
        $http.post('http://localhost:8090/users/@'+sessionStorage.getItem('userLogin')+'/patch', this.user).then((result) => {
            $state.reload();
        });
        
    }
}])