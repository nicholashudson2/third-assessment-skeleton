angular.module('twitterApp').service('contextService', ['$http', function($http){


    this.getContext = (id) => {
        return $http.get('tweets/' + id + '/context')
    }



    
}])