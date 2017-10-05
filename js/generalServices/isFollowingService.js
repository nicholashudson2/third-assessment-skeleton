angular.module('twitterApp').service('isFollowingService', ['$http', function($http){

        this.currentUserIsFollowing = (personBeingFollowed) => {
            return $http.get('http://localhost:8090/users/' + sessionStorage.getItem('userLogin') + '/is_following/' + personBeingFollowed)
        }
        
    }])