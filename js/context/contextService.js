angular.module('twitterApp').service('contextService', ['$http', function($http){

    this.setTargetId = (id) => {
        this.targetId = id
    }

    this.getContext = () => {
        return $http.get('http://localhost:8090/tweets/' + this.targetId + '/context')
    }



    
}])