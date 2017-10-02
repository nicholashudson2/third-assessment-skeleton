angular.module('twitterApp').service('feedService', ['$http', function($http){


    this.getFeed = (username) => {
        return $http.get('users/@' + username + '/feed')
    }



    
}])