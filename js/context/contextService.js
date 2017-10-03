angular.module('twitterApp').service('contextService', ['$http', function($http){


    this.getContext = (id) => {
        return $http.get('http://localhost:8090/api/tweets/' + id + '/context')
    }



    
}])