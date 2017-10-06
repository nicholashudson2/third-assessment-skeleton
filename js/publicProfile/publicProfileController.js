angular.module('twitterApp').controller('publicProfileController', ['$http', '$state', function ($http, $state) {

    this.user = this.resolvedUser.data
    this.isBeingFollowed = this.resolvedIsBeingFollowed.data
    console.log("loading public profile")
    console.log("isBeingFollowed value = " + this.isBeingFollowed)

    this.follow = (username) => {
        this.isBeingFollowed = true
        let credentials = {
            password: sessionStorage.getItem('password'),
            userLogin: sessionStorage.getItem('userLogin')
        }
        $http.post('http://localhost:8090/users/@' + username + '/follow', credentials)
            .then((value) => {
                $state.reload()
            })
    }

    this.unfollow = (username) => {
        let credentials = {
            password: sessionStorage.getItem('password'),
            userLogin: sessionStorage.getItem('userLogin')
        }
        this.isBeingFollowed = false
        $http.post('http://localhost:8090/users/@' + username + '/unfollow', credentials)
            .then((value) => {
                $state.reload()
            })
    }

}])

