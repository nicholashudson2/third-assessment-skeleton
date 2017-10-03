angular.module('twitterApp').controller('contextController', ['$http', 'tweetService', function($http, tweetService){
    
    this.context = resolvedContext.data

    this.tweetService = tweetService

    this.getContext= (id) => {
        return $http.get('tweets/' + id + '/context')
    }

}])