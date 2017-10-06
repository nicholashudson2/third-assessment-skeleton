angular.module('twitterApp').service( 'profileService', ['$http', '$state', function($http, $state){
    this.updateProfile = () => {
        this.user.credentials = {userLogin: sessionStorage.getItem('userLogin'), password: sessionStorage.getItem('password')};
        $http.patch('http://localhost:8090/users', this.user).then((result) => {
            $state.reload();
        });
    }

    this.followUser = (username) => {
        let credentials = {userLogin: sessionStorage.getItem('userLogin'), password: sessionStorage.getItem('password')};
        $http.post('http://localhost:8090/users/@' + username + '/follow', credentials).then((result) => {
            $state.reload();
        })
    }

    this.unfollowUser = (username) => {
        let credentials = {userLogin: sessionStorage.getItem('userLogin'), password: sessionStorage.getItem('password')};
        $http.post('http://localhost:8090/users/@' + username + '/unfollow', credentials).then((result) => {
            $state.reload();
        })
    }
}])