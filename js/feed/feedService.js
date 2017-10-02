angular.module('twitterApp').service('feedService', ['$http', function($http){


    this.getFeed = (userName) => {
        return $http.get('users/@' + userName + '/feed')
    }



    
}])