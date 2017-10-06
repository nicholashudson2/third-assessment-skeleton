angular.module('twitterApp').service( 'profileService', ['$http', '$state', function($http, $state){

    
    this.updateProfile = () => {
        if(!this.user || !this.user.profile){
            alert('Lack of data!!!')
        }else 
        if(!this.user.profile.email){
            alert('Email required!!!')
        }else{
            this.user.credentials = {userLogin: sessionStorage.getItem('userLogin'), password: sessionStorage.getItem('password')};
            $http.patch('http://localhost:8090/users', this.user).then((result) => {
                $state.reload();
            });
        }
    }
}])