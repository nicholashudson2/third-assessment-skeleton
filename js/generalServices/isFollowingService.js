angular.module('twitterApp').service('isFollowingService', ['$http', function($http){

        this.currentUserIsFollowing = (personBeingFollowed) => {
            if (personBeingFollowed.charAt(0) === '@'){
                personBeingFollowed = personBeingFollowed.slice(1)
            }
            return $http.get('http://localhost:8090/users/' + sessionStorage.getItem('userLogin') + '/is_following/' + personBeingFollowed)
        }
        
    }])