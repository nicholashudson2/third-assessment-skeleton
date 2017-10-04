angular.module('twitterApp').service('hashtagListService', ['$http', function($http){

    this.getTags = () => {
        return $http.get('http://localhost:8090/tags')
    }
    
}])