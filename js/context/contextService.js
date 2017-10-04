angular.module('twitterApp').service('contextService', ['$http', function($http){

    this.setTargetId = (id) => {
        this.targetId = id
    }

    this.getContext = (id) => {
        // return $http.get('http://localhost:8090/api/tweets/' + this.targetId + '/context')
        return $http.get('http://localhost:8090/api/tweets/' + this.id + '/context')
    }



    
}])